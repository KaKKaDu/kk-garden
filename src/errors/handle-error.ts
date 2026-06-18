import type { DataObject, SuccessData } from './success-data.js';
import { AppError } from './app-error.js';

export const handleError = <Data extends DataObject = DataObject>(
  e: unknown
): SuccessData<false, Data> => {
  let statusCode: number = 0;
  let message: string = 'Unknown error';
  if (e instanceof Error) {
    message = `${e.message}`;
    return {
      success: false,
      errors: [
        new AppError({ message, status: 0, context: JSON.stringify(e) }),
      ],
    };
  }
  if (e && typeof e === 'object') {
    if ('code' in e) {
      statusCode = parseInt(e.code as string);
    } else if ('status' in e) {
      statusCode = parseInt(e.status as string);
    } else if ('statusCode' in e) {
      statusCode = parseInt(e.statusCode as string);
    }
    if ('data' in e) {
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
