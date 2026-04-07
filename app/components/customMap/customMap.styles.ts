import { StyleSheet } from 'react-native';
import { globalStyles, spacing } from '@theme/theme';

export const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    marginTop: spacing.xs,
    borderRadius: 12,
    overflow: 'hidden',
    ...globalStyles.shadow,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});