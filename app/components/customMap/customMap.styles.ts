import { StyleSheet } from 'react-native';
import { colors, globalStyles, spacing } from '@theme/theme';

export const styles = StyleSheet.create({
  mapContainer: {
    height: 350,
    marginBottom: spacing.xxl,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    ...globalStyles.shadow,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});