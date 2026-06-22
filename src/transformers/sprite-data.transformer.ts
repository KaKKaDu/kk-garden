import { Transformer } from './transformer.js';
import type {
  Nullable,
  SpriteData,
  SpriteDataDto,
  SpritesheetSetsObject,
} from '../types/index.js';
import { AnimatedSprite } from '../spritesheet-set/index.js';
import type {
  TransformerAdditionalProps,
  TransformerType,
} from '../types/transformer.types.js';

type SpriteDataTransformerProps = TransformerAdditionalProps<
  undefined,
  {
    sets: SpritesheetSetsObject;
  }
>;

class SpriteDataTransformer extends Transformer<
  SpriteData,
  SpriteDataDto,
  SpriteDataTransformerProps
> {
  toDto(entity: SpriteData): SpriteDataDto {
    return {
      ...entity,
      sprite: entity.sprite.toDto(),
    };
  }

  fromDto(
    dto: SpriteDataDto,
    props: SpriteDataTransformerProps['from']
  ): Nullable<SpriteData> {
    if (!props) {
      return null;
    }

    const sprite: Nullable<AnimatedSprite<string>> = AnimatedSprite.fromDto(
      dto.sprite,
      props.sets
    );
    if (!sprite) {
      return null;
    }

    return {
      ...dto,
      sprite,
    };
  }
}

export const spriteDataTransformer: TransformerType<
  SpriteData,
  SpriteDataDto,
  SpriteDataTransformerProps
> = new SpriteDataTransformer();
