import type { Nullable } from './common.types.js';

export type TransformerAdditionalProps<To = object, From = object> = {
  to?: To;
  from?: From;
};

export type TransformerType<
  Type,
  DtoType,
  Props extends TransformerAdditionalProps = TransformerAdditionalProps,
> = {
  toDto: (entity: Type, props?: Props['to']) => DtoType;
  fromDto: (dto: DtoType, props?: Props['from']) => Nullable<Type>;
};
