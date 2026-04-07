import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.m,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.l,
  },
  errorText: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: colors.border,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xs,
    minHeight: 250,
  },
  mapPlaceholderText: {
    ...typography.body,
    color: colors.textSecondary,
  },
});