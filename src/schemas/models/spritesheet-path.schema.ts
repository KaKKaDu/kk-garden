import {z} from "zod";
import {assetsMapKeys} from "../../assets";

export const SpritesheetPathSchema = z.enum(assetsMapKeys);