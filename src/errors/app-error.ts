import type { DataObject } from './success-data';

export type AppErrorConfig = {
  message: string;
  status?: number;
  context?: DataObject;
  error?: Error;
};

export class AppError extends Error {
  status?: number;
  context?: DataObject;
  error?: Error;

  get isServer(): boolean {
    return !!(this.status && this.status > 500 && this.status < 600);
  }

  get isClient(): boolean {
    return !!(this.status && this.status >= 400 && this.status < 500);
  }

  constructor({ status, message, context, error }: AppErrorConfig) {
    super(message);
    this.status = status;
    this.context = context;
    this.error = error;
  }
}
