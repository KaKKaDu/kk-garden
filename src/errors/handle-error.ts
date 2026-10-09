import type { DataObject, SuccessData } from './success-data.js';
import { AppError } from './app-error.js';

const getErrorStatus = (error: object): number => {
  const candidates: unknown[] = [
    'status' in error ? error.status : undefined,
    'statusCode' in error ? error.statusCode : undefined,
    'code' in error ? error.code : undefined,
  ];

  for (const candidate of candidates) {
    const status: number =
      typeof candidate === 'number'
        ? candidate
        : typeof candidate === 'string' && candidate.trim() !== ''
          ? Number(candidate)
          : NaN;
    if (Number.isInteger(status) && status >= 400 && status < 600) {
      return status;
    }
  }
  return 500;
};

export const handleError = <Data extends DataObject = DataObject>(
  e: unknown
): SuccessData<false, Data> => {
  if (e instanceof AppError) {
    return { success: false, errors: [e] };
  }

  let statusCode: number = 500;
  let message: string = 'Unknown error';
  if (e instanceof Error) {
    return {
      success: false,
      errors: [
        new AppError({
          message: e.message,
          status: getErrorStatus(e),
          error: e,
        }),
      ],
    };
  }
  if (e && typeof e === 'object') {
    statusCode = getErrorStatus(e);
    if ('message' in e && typeof e.message === 'string') {
      message = e.message;
    } else if ('data' in e) {
      message = JSON.stringify(e.data);
    } else if ('description' in e) {
      message = JSON.stringify(e.description);
    } else {
      message = JSON.stringify(e);
    }
  } else if (e && typeof e === 'string') {
    message = e;
  }
  return {
    success: false,
    errors: [
      new AppError({ message, status: statusCode, context: JSON.stringify(e) }),
    ],
  };
};
