import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.l,
  },
  listContent: {
    padding: spacing.m,
  },
  errorText: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  footerLoader: {
    paddingVertical: spacing.m,
    alignItems: 'center',
  },
});