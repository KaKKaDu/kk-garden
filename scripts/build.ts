import { execSync } from 'node:child_process';
import chalk from 'chalk';
import ora, { type Ora } from 'ora';

/* eslint-disable no-console */

function run(command: string, label: string) {
  const spinner: Ora = ora(label).start();

  try {
    execSync(command, { stdio: 'pipe' });
    spinner.succeed(chalk.green(`${label}`));
    return true;
  } catch (error) {
    spinner.fail(chalk.red(`${label} - Failed`));
    console.log('\n');
    console.log(error instanceof Error ? error.message : error);
    return false;
  }
}

console.log(chalk.blue.bold('Building the package \n'));

const formatOk: boolean = run('npx prettier --write .', 'Formatting');
if (!formatOk) process.exit(1);

const typeOk: boolean = run(
  'npx tsc --noEmit -p tsconfig.build.json',
  'Type Checking'
);
if (!typeOk) process.exit(1);

const buildOk: boolean = run(
  'npx tsc -p tsconfig.build.json',
  'Building Typescript Files'
);
if (!buildOk) process.exit(1);

const assetsCopyOk: boolean = run(
  "cpy 'src/assets/spritesheets/**/*' dist/assets/spritesheets && cpy 'src/globals.d.ts' dist/",
  'Copying Assets'
);
if (!assetsCopyOk) process.exit(1);

console.log('\n' + chalk.blue.bold('Build was performed successfully \n'));
