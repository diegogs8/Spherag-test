import { StyleSheet } from 'react-native';
import { colors, spacing, typography, globalStyles } from '@theme/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: spacing.m,
    borderRadius: 12,
    marginBottom: spacing.m,
    ...globalStyles.shadow,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.s,
  },
  name: {
    ...typography.title,
    flex: 1,
  },
  imeiText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  dateText: {
    ...typography.caption,
    marginLeft: spacing.xs,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.s,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.l,
  },
  statValue: {
    ...typography.body,
    fontWeight: '600',
    marginLeft: spacing.xs,
  },
});