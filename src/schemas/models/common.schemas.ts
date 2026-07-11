import { z } from 'zod';

export const CoordinatesSchema = z.object({
  x: z.number(),
  y: z.number(),
});

export const SizeMeasuresSchema = z.object({
  width: z.number(),
  height: z.number(),
});

export const CellSchema = z.object({
  row: z.number(),
  column: z.number(),
});

type IdType = 'string' | 'number';

type ResolveIdObject<T extends IdType, Mongo extends boolean> = z.ZodObject<
  Mongo extends false
    ? {
        id: T extends 'string'
          ? z.ZodString
          : T extends 'number'
            ? z.ZodNumber
            : never;
      }
    : {
        _id: T extends 'string'
          ? z.ZodString
          : T extends 'number'
            ? z.ZodNumber
            : never;
      }
>;

export const addId = <T extends IdType>(
  type?: T
): ResolveIdObject<T, false>['shape'] => {
  if (type === 'number') {
    return z.object({ id: z.number() }).shape as ResolveIdObject<
      T,
      false
    >['shape'];
  } else {
    return z.object({ id: z.string() }).shape as ResolveIdObject<
      T,
      false
    >['shape'];
  }
};

export const addMongoId = <T extends IdType>(
  type?: T
): ResolveIdObject<T, true>['shape'] => {
  if (type === 'number') {
    return z.object({ _id: z.number() }).shape as ResolveIdObject<
      T,
      true
    >['shape'];
  } else {
    return z.object({ _id: z.string() }).shape as ResolveIdObject<
      T,
      true
    >['shape'];
  }
};
