export const colors = {
  primary: '#16C47F',
  primaryDark: '#0ea56e',
  secondary: '#22C55E',
  accent: '#0EA5E9',
  background: '#0F172A',
  backgroundDark: '#0A1628',
  foreground: '#F8FAFC',
  card: '#1E293B',
  cardForeground: '#F1F5F9',
  muted: '#1E293B',
  mutedForeground: '#64748B',
  border: 'rgba(255,255,255,0.08)',
  danger: '#EF4444',
  warning: '#F59E0B',
  success: '#22C55E',
  slate400: '#94A3B8',
  slate500: '#64748B',
  slate600: '#475569',
  slate700: '#334155',
  white: '#F8FAFC',
  white08: 'rgba(255,255,255,0.08)',
  white06: 'rgba(255,255,255,0.06)',
  white04: 'rgba(255,255,255,0.04)',
  white012: 'rgba(255,255,255,0.12)',
  primary015: 'rgba(22,196,127,0.15)',
  primary02: 'rgba(22,196,127,0.2)',
  primary025: 'rgba(22,196,127,0.25)',
  premium: '#A78BFA',
  premiumDark: '#7C3AED',
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
}

export const borderRadius = {
  sm: 6,
  md: 12,
  lg: 14,
  xl: 16,
  xxl: 20,
  xxxl: 24,
  round: 9999,
}

export const typography = {
  fontFamily: {
    sans: 'Inter',
    display: 'Poppins',
  },
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    hero: 44,
  },
  weight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
    black: '900' as const,
  },
}

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  primary: {
    shadowColor: '#16C47F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 8,
  },
}
