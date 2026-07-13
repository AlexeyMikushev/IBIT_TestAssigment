export const theme = {
  colorWhite: '#ffffff',
  colorTextPrimary: '#111827',
  colorTextSecondary: '#6b7280',
  colorBackground: '#f9fafb',
  colorBorder: '#f3f4f6',
  colorSkeleton: '#e5e7eb',
  colorDanger: '#ef4444',
  colorOverlay: 'rgba(15, 23, 42, 0.035)',

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
