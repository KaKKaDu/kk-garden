import { ProfileAccentHexSchema } from '../schemas/models/profile.schema.js';

const SURFACE = '#ffffff';
const ON_SURFACE = '#202020';
const BLACK = '#000000';
const WHITE = '#ffffff';
const NORMAL_TEXT_CONTRAST = 4.5;
const UI_BOUNDARY_CONTRAST = 3;

type Rgb = readonly [red: number, green: number, blue: number];

export interface ProfilePalette {
  accent: string;
  onAccent: string;
  accentText: string;
  accentBorder: string;
  surface: string;
  onSurface: string;
}

export const DEFAULT_PROFILE_ACCENT_HEX = '#6b9b75';

export const createProfilePalette = (
  accentHex: string = DEFAULT_PROFILE_ACCENT_HEX
): ProfilePalette => {
  const accent = ProfileAccentHexSchema.parse(accentHex);
  const onAccent =
    contrastRatio(BLACK, accent) >= contrastRatio(WHITE, accent)
      ? BLACK
      : WHITE;

  return {
    accent,
    onAccent,
    accentText: deriveForeground(accent, NORMAL_TEXT_CONTRAST),
    accentBorder: deriveForeground(accent, UI_BOUNDARY_CONTRAST),
    surface: SURFACE,
    onSurface: ON_SURFACE,
  };
};

const deriveForeground = (accent: string, minimumContrast: number): string => {
  if (contrastRatio(accent, SURFACE) >= minimumContrast) {
    return accent;
  }

  let lightestPassingAmount = 1;
  let darkestFailingAmount = 0;

  for (let iteration = 0; iteration < 24; iteration += 1) {
    const amount = (lightestPassingAmount + darkestFailingAmount) / 2;
    const candidate = blendTowardBlack(accent, amount);

    if (contrastRatio(candidate, SURFACE) >= minimumContrast) {
      lightestPassingAmount = amount;
    } else {
      darkestFailingAmount = amount;
    }
  }

  return blendTowardBlack(accent, lightestPassingAmount);
};

const blendTowardBlack = (hex: string, amount: number): string => {
  const rgb = hexToRgb(hex);
  const channels = rgb.map((channel) => Math.round(channel * (1 - amount)));
  return `#${channels.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
};

const contrastRatio = (first: string, second: string): number => {
  const firstLuminance = relativeLuminance(hexToRgb(first));
  const secondLuminance = relativeLuminance(hexToRgb(second));
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);

  return (lighter + 0.05) / (darker + 0.05);
};

const relativeLuminance = ([red, green, blue]: Rgb): number => {
  const linearize = (channel: number): number => {
    const srgb = channel / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  };

  return (
    0.2126 * linearize(red) +
    0.7152 * linearize(green) +
    0.0722 * linearize(blue)
  );
};

const hexToRgb = (hex: string): Rgb => [
  Number.parseInt(hex.slice(1, 3), 16),
  Number.parseInt(hex.slice(3, 5), 16),
  Number.parseInt(hex.slice(5, 7), 16),
];
