import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { formatDate } from '@domain/utils/dateUtils';
import { colors } from '@theme/theme';
import { AtlasListItem } from '@domain/model/Atlas';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from './atlasItem.styles';

interface AtlasItemProps {
  atlas: AtlasListItem;
  onPress: (imei: string) => void;
}

export const AtlasItem = ({ atlas, onPress }: AtlasItemProps) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => onPress(atlas.imei)}
      activeOpacity={0.7}
    >
      <View style={styles.headerRow}>
        <Text style={styles.name} numberOfLines={1}>{atlas.name}</Text>
        <Text style={styles.imeiText}>IMEI: {atlas.imei}</Text>
      </View>

      <View style={styles.dateContainer}>
        <Ionicons name="time-outline" size={16} color={colors.textSecondary} />
        <Text style={styles.dateText}>
          Expires: {formatDate(atlas.expiredDate)}
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Ionicons name="battery-half" size={20} color={colors.primary} />
          <Text style={styles.statValue}>{atlas.batteryPercentage}%</Text>
        </View>

        <View style={styles.statItem}>
          <Ionicons name="cellular" size={20} color={colors.primary} />
          <Text style={styles.statValue}>{atlas.signalPercentage}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};