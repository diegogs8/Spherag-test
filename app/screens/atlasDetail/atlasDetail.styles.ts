import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.m,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.l,
    gap: spacing.m,
  },
  errorText: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
  },
  sectionTitle: {
    ...typography.title,
    marginHorizontal: spacing.m,
  },
  sectionLabel: {
    ...typography.title,
    fontSize: 18,
    marginVertical: spacing.m,
    color: colors.textPrimary,
  },
});