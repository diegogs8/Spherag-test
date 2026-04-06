import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.s,
    minHeight: 48, 
  },
  buttonDisabled: {
    backgroundColor: colors.border,
  },
  text: {
    ...typography.button,
  },
  textDisabled: {
    color: colors.textSecondary,
  },
});