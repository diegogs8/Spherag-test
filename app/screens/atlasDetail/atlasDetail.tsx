import { useAtlasDetailQuery } from '@hooks/useAtlasQuery';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { colors } from '@theme/theme';
import { RootStackParamList } from 'app/navigation/navigationTypes';
import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './atlasDetail.styles';
import { CustomMap } from '@components/customMap/customMap';
import { AtlasDetailInfo } from '@components/atlasDetailInfo/atlasDetailInfo';

type AtlasDetailScreenRouteProp = RouteProp<RootStackParamList, 'AtlasDetail'>;

export const AtlasDetailScreen = () => {
  const { t } = useTranslation();
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
          {t('errors.atlasDetail')}
        </Text>
      </View>
    );
  }

  const latitude = parseFloat(atlasDetail.latitude);
  const longitude = parseFloat(atlasDetail.longitude);

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <AtlasDetailInfo atlas={atlasDetail} />

      <Text style={styles.sectionLabel}>{t('atlas.deviceLocation')}</Text>

      <CustomMap
        latitude={latitude}
        longitude={longitude}
        markerTitle={atlasDetail.name}
        markerDescription={`IMEI: ${atlasDetail.imei}`}
      />
    </ScrollView>
  );
};