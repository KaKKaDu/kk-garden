import {z} from "zod";

export const AnimatedSpriteDtoSchema = z.object({
  key: z.string(),
  fps: z.number(),
  animation: z.string().array(),
  // @todo: handle frames field transmit
});