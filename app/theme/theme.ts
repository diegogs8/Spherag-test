export const colors = {
  primary: '#1d75af',
  background: '#F5F7FA',
  surface: '#FFFFFF',
  textPrimary: '#2C3E50',
  textSecondary: '#7F8C8D',
  border: '#E0E6ED',
  error: '#E74C3C',
  favorite: '#F1C40F',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
};

export const typography = {
  header: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    color: colors.textPrimary,
  },
  title: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: colors.textPrimary,
  },
  body: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  caption: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    color: colors.white,
  },
};

export const globalStyles = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android
  },
};