import { z } from 'zod';
import { UserIdSchema } from './id.schemas.js';

export const ProfileDisplayNameSchema = z
  .string()
  .trim()
  .superRefine((value, context) => {
    const codePointLength = Array.from(value).length;

    if (codePointLength < 1 || codePointLength > 40) {
      context.addIssue({
        code: 'custom',
        message: 'Display name must contain 1 to 40 Unicode code points',
      });
    }

    if (/[\p{Cc}\p{Zl}\p{Zp}]/u.test(value)) {
      context.addIssue({
        code: 'custom',
        message:
          'Display name must be a single line without control characters',
      });
    }
  });

export const ProfileBioSchema = z
  .string()
  .trim()
  .superRefine((value, context) => {
    const codePointLength = Array.from(value).length;

    if (codePointLength < 1 || codePointLength > 280) {
      context.addIssue({
        code: 'custom',
        message: 'Bio must contain 1 to 280 Unicode code points',
      });
    }
  });

export const ProfileAccentHexSchema = z
  .string()
  .regex(/^#[\da-fA-F]{6}$/)
  .transform((value) => value.toLowerCase());

export const ProfileAvatarObjectKeySchema = z.string().min(1);

export const ProfileSchema = z
  .object({
    _id: UserIdSchema,
    displayName: ProfileDisplayNameSchema,
    bio: ProfileBioSchema.optional(),
    accentHex: ProfileAccentHexSchema.optional(),
    avatarObjectKey: ProfileAvatarObjectKeySchema.optional(),
  })
  .strict();
