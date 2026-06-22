import { Transformer } from './transformer.js';
import type {
  GardenDrawData,
  GardenDrawDataDto,
  SpriteData,
  SpriteDataDto,
  SpritesheetSetsObject,
  TransformerType,
} from '../types/index.js';
import { spriteDataTransformer } from './sprite-data.transformer.js';

class GardenDrawDataTransformer extends Transformer<
  GardenDrawData,
  GardenDrawDataDto
> {
  toDto(entity: GardenDrawData): GardenDrawDataDto {
    const spritesheetSets: SpritesheetSetsObject = {};

    const generateSpriteDataDto = (data: SpriteData): SpriteDataDto => {
      spritesheetSets[data.sprite.frames.id] = data.sprite.frames.toDto();
      return spriteDataTransformer.toDto(data);
    };

    const treesDto: SpriteDataDto[] = entity.trees.map(
      (tree: SpriteData): SpriteDataDto => generateSpriteDataDto(tree)
    );
    const bushesDto: SpriteDataDto[] = entity.bushes.map(
      (bush: SpriteData): SpriteDataDto => generateSpriteDataDto(bush)
    );

    return {
      staticData: {
        tiles: entity.tile,
        stones: entity.stones,
      },
      animatedData: {
        spritesheetSets: spritesheetSets,
        trees: treesDto,
        bushes: bushesDto,
      },
    };
  }

  fromDto(dto: GardenDrawDataDto): GardenDrawData {
    const tiles = dto.staticData.tiles;
    const stones = dto.staticData.stones;
    const trees = dto.animatedData.trees
      .map((tree) => {
        return spriteDataTransformer.fromDto(tree, {
          sets: dto.animatedData.spritesheetSets,
        });
      })
      .filter(Boolean) as SpriteData[];
    const bushes = dto.animatedData.bushes
      .map((bush) => {
        return spriteDataTransformer.fromDto(bush, {
          sets: dto.animatedData.spritesheetSets,
        });
      })
      .filter(Boolean) as SpriteData[];

    return {
      tile: tiles,
      stones: stones,
      trees: trees,
      bushes: bushes,
    };
  }
}

export const gardenDrawDataTransformer: TransformerType<
  GardenDrawData,
  GardenDrawDataDto
> = new GardenDrawDataTransformer();
