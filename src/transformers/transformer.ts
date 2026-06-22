import type { Nullable } from '../types/index.js';
import type {
  TransformerAdditionalProps,
  TransformerType,
} from '../types/transformer.types.js';

export abstract class Transformer<
  Type,
  DtoType,
  Props extends TransformerAdditionalProps = TransformerAdditionalProps,
> implements TransformerType<Type, DtoType, Props> {
  abstract toDto(entity: Type, props?: Props['to']): DtoType;
  abstract fromDto(dto: DtoType, props?: Props['from']): Nullable<Type>;
}
