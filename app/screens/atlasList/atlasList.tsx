import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { colors } from '@theme/theme';
import { NavigationProps, RootStackParamList } from 'app/navigation/navigationTypes';
import React from 'react';
import { View, Text, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { styles } from './atlasList.styles';
import { AtlasItem } from '@components/atlasItem/atlasItem';
import { useAtlasInfiniteQuery } from '@hooks/useAtlasQuery';

type AtlasScreenRouteProp = RouteProp<RootStackParamList, 'Atlas'>;

export const AtlasListScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<AtlasScreenRouteProp>();
  
  const { estateId } = route.params;

  const { 
    data, 
    isLoading, 
    isError, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage,
    refetch,
    isRefetching
  } = useAtlasInfiniteQuery(estateId);

  const atlasList = data?.pages.flatMap((page: any) => page.items) || [];

  const handleNavigateToDetail = (imei: string) => {
    navigation.navigate('AtlasDetail', { estateId, imei });
  };

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          {t('errors.atlasList')}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={atlasList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <AtlasItem atlas={item} onPress={handleNavigateToDetail} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <View style={styles.centerContainer}>
            <Text style={styles.emptyText}>{t('atlasList.noAtlasFound')}</Text>
          </View>
        }
        ListFooterComponent={
          isFetchingNextPage ? (
            <View style={styles.footerLoader}>
              <ActivityIndicator size="small" color={colors.primary} />
            </View>
          ) : null
        }
        refreshControl={
          <RefreshControl 
            refreshing={isRefetching && !isFetchingNextPage} 
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
      />
    </View>
  );
};