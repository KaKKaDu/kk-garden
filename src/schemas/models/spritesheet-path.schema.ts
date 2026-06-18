import { z } from 'zod';
import { assetsMapKeys } from '../../assets/index.js';

export const SpritesheetPathSchema = z.enum(assetsMapKeys);
