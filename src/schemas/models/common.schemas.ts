import {z} from "zod";

export type FromZod<ZodObject extends z.ZodObject> = z.infer<ZodObject>;

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

type ResolveIdObject<T extends IdType> = z.ZodObject<{
  id: T extends 'string' ? z.ZodString : T extends 'number' ? z.ZodNumber : never;
}>;

export const addId = <T extends IdType>(type?: T): ResolveIdObject<T>['shape'] => {
  if(type === 'number') {
    return z.object({ id: z.number() }).shape as ResolveIdObject<T>['shape'];
  } else {
    return z.object({ id: z.string() }).shape as ResolveIdObject<T>['shape'];
  }
};
