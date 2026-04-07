import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '@theme/theme';
import { AtlasDetail } from '@domain/model/Atlas';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from './atlasDetailInfo.styles';

interface AtlasDetailInfoProps {
  atlas: AtlasDetail;
}

export const AtlasDetailInfo = ({ atlas }: AtlasDetailInfoProps) => {
  return (
<View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {atlas.name}
        </Text>
        <Text style={styles.subtitle}>IMEI: {atlas.imei}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBadge}>
          <Ionicons name="battery-half" size={16} color={colors.primary} />
          <Text style={styles.statText}>{atlas.batteryPercentage}%</Text>
        </View>

        <View style={styles.statBadge}>
          <Ionicons name="cellular" size={16} color={colors.primary} />
          <Text style={styles.statText}>{atlas.signalPercentage}%</Text>
        </View>
      </View>
    </View>
  );
};