import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.l,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.header,
    marginBottom: spacing.xxl,
    textAlign: 'center',
  },
  input: {
    backgroundColor: colors.surface,
    padding: spacing.m,
    borderRadius: 12,
    marginBottom: spacing.m,
    borderWidth: 1,
    borderColor: colors.border,
    ...typography.body,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: spacing.s,
  },
  buttonText: {
    ...typography.button,
  },
});