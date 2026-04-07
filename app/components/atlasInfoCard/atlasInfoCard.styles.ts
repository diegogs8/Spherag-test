import { StyleSheet } from 'react-native';
import { colors, spacing, typography, globalStyles } from '@theme/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: spacing.l,
    borderRadius: 12,
    marginBottom: spacing.m,
    ...globalStyles.shadow,
  },
  title: {
    ...typography.header,
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.l,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.m,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    ...typography.caption,
    marginTop: spacing.xs,
  },
  statValue: {
    ...typography.title,
    marginTop: spacing.xs,
  },
});