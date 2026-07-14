export const theme = {
  colorWhite: '#ffffff',
  colorTextPrimary: '#111827',
  colorTextSecondary: '#6b7280',
  colorBackground: '#f9fafb',
  colorBorder: '#f3f4f6',
  colorSkeleton: '#e5e7eb',
  colorSwipeBackground: '#ef4444',
  colorAccent: '#3b82f6',

  fontFamilyLight: 'Inter-Light',
  fontFamilyBold: 'Inter-Bold',

  fontWeightLight: '300',
  fontWeightBold: '700',

  fontSizeSm: 14,
  fontSizeBase: 15,
  fontSizeMd: 16,
  fontSizeLg: 24,
} as const;

export type Theme = typeof theme;
