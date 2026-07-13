import { execSync } from 'node:child_process';
import chalk from 'chalk';
import ora from 'ora';
import { createInterface } from 'node:readline';
import { readFileSync } from 'node:fs';

function run(command: string, options: { stdio?: 'inherit' | 'pipe' } = {}) {
  const stdio = options.stdio ?? 'pipe';

  const result = execSync(command, {
    encoding: 'utf8',
    stdio,
  });

  return typeof result === 'string' ? result.trim() : '';
}

function getNextVersion(): string {
  const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));
  let [major, minor, patch] = packageJson.version.split('.').map(Number);

  patch += 1;
  if (patch >= 10) {
    patch = 0;
    minor += 1;
    if (minor >= 10) {
      minor = 0;
      major += 1;
    }
  }

  return `${major}.${minor}.${patch}`;
}

function promptForCustomMessage(): Promise<string> {
  return new Promise((resolve) => {
    const readline = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      chalk.cyan(
        '\nEnter custom commit message (optional, press Enter to skip): '
      ),
      (answer) => {
        readline.close();
        resolve(answer);
      }
    );
  });
}

async function main() {
  console.log(chalk.bold.cyan('\nPackage Release\n'));

  try {
    run('npm run build', { stdio: 'inherit' });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  const authSpinner = ora('Checking npm authentication...').start();

  try {
    const username = run('npm whoami');

    authSpinner.succeed(`Logged in as ${chalk.green(username)}`);
  } catch (error) {
    authSpinner.warn('Not logged in');

    console.log(chalk.yellow('\nYou must authenticate before publishing.\n'));

    run('npm login', { stdio: 'inherit' });

    authSpinner.succeed('Authentication successful');
  }

  const customMessage = await promptForCustomMessage();
  const nextVersion = getNextVersion();

  const syncSpinner = ora('Syncing existing changes...\n').start();

  try {
    run('git add .', { stdio: 'inherit' });
    console.log('\n');

    const hasChanges = run('git status --porcelain');

    if (hasChanges) {
      const syncCommitMessage = customMessage
        ? `chore(v${nextVersion}): ${customMessage}`
        : `chore(v${nextVersion}): pre-release sync`;

      run(`git commit -m "${syncCommitMessage}"`, { stdio: 'inherit' });
      run('git push origin main', { stdio: 'inherit' });
    }

    syncSpinner.succeed('Repository synchronized');
  } catch (error) {
    syncSpinner.fail('Failed to synchronize repository');
    console.error(error);
    process.exit(1);
  }

  const versionSpinner = ora('Bumping patch version...').start();

  let version: string;

  try {
    const commitMessage = customMessage
      ? `release(v${nextVersion}): ${customMessage}`
      : `release(v${nextVersion}): version patch`;

    version = run(`npm version ${nextVersion} -m "${commitMessage}"`);

    versionSpinner.succeed(`Version bumped to ${chalk.green(version)}`);
  } catch (error) {
    versionSpinner.fail('Failed to bump version');
    console.error(error);
    process.exit(1);
  }

  const pushSpinner = ora('Pushing commit and tag...\n').start();

  try {
    run('git push origin main', { stdio: 'inherit' });
    run('git push origin main --tags', { stdio: 'inherit' });

    pushSpinner.succeed('Repository updated');
  } catch (error) {
    pushSpinner.fail('Failed to push changes');
    console.error(error);
    process.exit(1);
  }

  const publishSpinner = ora('Publishing package...\n').start();

  try {
    run('npm publish', { stdio: 'inherit' });

    publishSpinner.succeed(`${chalk.green(version)} published successfully`);
  } catch (error) {
    publishSpinner.fail('Publish failed');
    console.error(error);
    process.exit(1);
  }

  console.log(chalk.bold.green(`\nRelease complete (${version})\n`));
}

main().catch((error) => {
  console.error(chalk.red('\nUnexpected error:\n'));
  console.error(error);
  process.exit(1);
});
