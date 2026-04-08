import { StyleSheet } from 'react-native';
import { colors, spacing, typography, globalStyles } from '@theme/theme';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        padding: spacing.m,
        borderRadius: 12,
        marginBottom: spacing.m,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...globalStyles.shadow,
        borderWidth: 1.5,
        borderColor: 'transparent',
    },
    cardFavourite: {
        borderColor: colors.favorite,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        ...typography.title,
        marginBottom: spacing.xs,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        ...typography.caption,
        marginLeft: spacing.xs,
    },
    iconContainer: {
        paddingLeft: spacing.m,
    },
});