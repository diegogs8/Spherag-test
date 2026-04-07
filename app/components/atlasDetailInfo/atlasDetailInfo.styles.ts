import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: spacing.l,
  },
  textContainer: {
    flex: 1,
    marginRight: spacing.m, 
  },
  title: {
    ...typography.header,
    fontSize: 28,
    color: colors.textPrimary,
    marginBottom: spacing.s,
  },
  subtitle: {
    ...typography.caption,
    fontSize: 14,
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: spacing.s, 
  },
  statBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: 6,
    paddingHorizontal: spacing.s,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: 80, 
    justifyContent: 'center',
  },
  statText: {
    ...typography.body,
    fontWeight: '600',
    marginLeft: spacing.xs,
    color: colors.textPrimary,
    fontSize: 14,
  },
});