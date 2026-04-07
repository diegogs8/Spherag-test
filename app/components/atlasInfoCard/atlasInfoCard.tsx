import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '@theme/theme';
import { AtlasDetail, AtlasListItem } from '@domain/model/Atlas';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from './atlasInfoCard.styles';

interface AtlasInfoCardProps {
  atlas: AtlasDetail;
}

export const AtlasInfoCard = ({ atlas }: AtlasInfoCardProps) => {
return (
    <View style={styles.card}>
      <Text style={styles.title}>{atlas.name}</Text>
      <Text style={styles.subtitle}>IMEI: {atlas.imei}</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Ionicons name="battery-half" size={32} color={colors.primary} />
          <Text style={styles.statLabel}>Battery</Text>
          <Text style={styles.statValue}>{atlas.batteryPercentage}%</Text>
        </View>

        <View style={styles.statItem}>
          <Ionicons name="cellular" size={32} color={colors.primary} />
          <Text style={styles.statLabel}>Signal</Text>
          <Text style={styles.statValue}>{atlas.signalPercentage}%</Text>
        </View>
      </View>
    </View>
  );
};