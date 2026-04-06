import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.l,
    backgroundColor: colors.background,
  },
  titleImage: {
    width: '100%',
    height: 150,
    alignSelf: 'center',
    marginTop: spacing.xxl,
  },
});