import { useEstatesQuery } from '@hooks/useEstateQuery';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { colors, spacing } from '@theme/theme';
import { NavigationProps } from 'app/navigation/navigationTypes';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, RefreshControl, TouchableOpacity, Modal, Pressable } from 'react-native';
import { styles } from './stateList.styles';
import { EstateItem } from '@components/estateItem/estateItem';
import Ionicons from '@react-native-vector-icons/ionicons';
import { logout } from '@infrastructure/store/authSlice';
import { useDispatch } from 'react-redux';
import { clearTokens } from '@infrastructure/store/secureStorage';

export const StateListScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProps>();
    const dispatch = useDispatch();

    const { data: estates, isLoading, isError, refetch, isRefetching } = useEstatesQuery();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={handleLogout}
                    style={{ padding: spacing.xs }}
                >
                    <Ionicons name="log-out-outline" size={24} color={colors.textPrimary} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const handleNavigateToAtlas = (estateId: number) => {
        navigation.navigate('Atlas', { estateId });
    };

    const handleLogout = async () => {
        await clearTokens();
        dispatch(logout());
    };

    if (isLoading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text>{t('common.loading')}</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>
                    {t('errors.estates')}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={estates}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <EstateItem estate={item} onPress={handleNavigateToAtlas} />
                )}
                ListEmptyComponent={
                    <View style={styles.centerContainer}>
                        <Text style={styles.emptyText}>{t('estateList.noEstatesFound')}</Text>
                    </View>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={isRefetching}
                        onRefresh={refetch}
                        tintColor={colors.primary}
                    />
                }
            />
        </View>
    );
};
