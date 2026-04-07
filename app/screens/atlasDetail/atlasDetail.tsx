import { AtlasInfoCard } from '@components/atlasInfoCard/atlasInfoCard';
import { useAtlasDetailQuery } from '@hooks/useAtlasQuery';
import { RouteProp, useRoute } from '@react-navigation/native';
import { colors } from '@theme/theme';
import { RootStackParamList } from 'app/navigation/navigationTypes';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './atlasDetail.styles';
import { CustomMap } from '@components/customMap/customMap';

type AtlasDetailScreenRouteProp = RouteProp<RootStackParamList, 'AtlasDetail'>;

export const AtlasDetailScreen = () => {
  const route = useRoute<AtlasDetailScreenRouteProp>();

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
          Something went wrong loading the Atlas details. Please, try again later.
        </Text>
      </View>
    );
  }

  const latitude = parseFloat(atlasDetail.latitude);
  const longitude = parseFloat(atlasDetail.longitude);

  return (
    <View style={styles.container}>
      <AtlasInfoCard atlas={atlasDetail} />

      <CustomMap
        latitude={latitude}
        longitude={longitude}
        markerTitle={atlasDetail.name}
        markerDescription={`IMEI: ${atlasDetail.imei}`}
      />
    </View>
  );
};