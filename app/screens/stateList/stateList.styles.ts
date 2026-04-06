import { StyleSheet } from 'react-native';
import { colors, spacing, typography, globalStyles } from '@theme/theme';

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
        marginTop: spacing.m,
    },
    emptyText: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    dropdownMenu: {
        position: 'absolute',
        top: 60,
        right: spacing.m,
        backgroundColor: colors.surface,
        borderRadius: 8,
        paddingVertical: spacing.xs,
        minWidth: 150,
        ...globalStyles.shadow,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.s,
        paddingHorizontal: spacing.m,
    },
    menuItemText: {
        ...typography.body,
        color: colors.error,
        marginLeft: spacing.s,
    },
});