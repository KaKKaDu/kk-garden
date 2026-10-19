import { z } from 'zod';

export const ProfileAvatarDeliverySchema = z
  .object({
    url: z.url(),
    expiresAt: z.iso.datetime(),
  })
  .strict();
