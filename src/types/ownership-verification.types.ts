export const ownershipVerificationStatuses = [
  'success',
  'failed',
  'blocked',
] as const;

export type OwnershipVerificationStatus =
  (typeof ownershipVerificationStatuses)[number];
