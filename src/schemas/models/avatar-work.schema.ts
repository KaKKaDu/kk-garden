import { z } from 'zod';

export const AvatarWorkTimestampSchema = z.iso.datetime().or(z.date());

export const AvatarStagingObjectKeySchema = z
  .string()
  .regex(
    /^avatars\/staging\/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
  );

export const AvatarFinalObjectKeySchema = z
  .string()
  .regex(
    /^avatars\/final\/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.webp$/
  );

export const AvatarWorkClaimSchema = z
  .object({
    token: z.string().min(1),
    claimedAt: AvatarWorkTimestampSchema,
    leaseExpiresAt: AvatarWorkTimestampSchema,
  })
  .strict()
  .refine(
    (claim): boolean =>
      new Date(claim.leaseExpiresAt).getTime() >
      new Date(claim.claimedAt).getTime(),
    {
      path: ['leaseExpiresAt'],
      message: 'A work lease must expire after it was claimed',
    }
  );

export const AvatarWorkFailureSchema = z
  .object({
    code: z.enum([
      'storage-unavailable',
      'processing-unavailable',
      'source-changed',
      'lease-expired',
      'database-unavailable',
      'object-still-referenced',
    ]),
    occurredAt: AvatarWorkTimestampSchema,
  })
  .strict();
