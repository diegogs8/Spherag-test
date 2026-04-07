import { AtlasInfoCard } from '@components/atlasInfoCard/atlasInfoCard';
import { useAtlasDetailQuery } from '@hooks/useAtlasQuery';
import { RouteProp, useRoute } from '@react-navigation/native';
import { colors } from '@theme/theme';
import { RootStackParamList } from 'app/navigation/navigationTypes';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './atlasDetail.styles';

type AtlasDetailScreenRouteProp = RouteProp<RootStackParamList, 'AtlasDetail'>;

export const AtlasDetailScreen = () => {
  const route = useRoute<AtlasDetailScreenRouteProp>();
  
  // Extract parameters passed from the Atlases list
  const { estateId, imei } = route.params;

  const { data: atlasDetail, isLoading, isError } = useAtlasDetailQuery(estateId, imei);

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (isError || !atlasDetail) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          Something went wrong loading the Atlas details. Please, try again later
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AtlasInfoCard atlas={atlasDetail} />

      {/* Map Placeholder - To be implemented next */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapPlaceholderText}>Map integration coming soon...</Text>
      </View>
    </View>
  );
};