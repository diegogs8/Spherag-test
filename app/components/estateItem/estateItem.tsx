import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { formatDate } from '@domain/utils/dateUtils';
import { colors } from '@theme/theme';
import { Estate } from '@domain/model/Estate';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from './estateItem.styles';

interface EstateItemProps {
    estate: Estate;
    onPress: (estateId: number) => void;
}

export const EstateItem = ({ estate, onPress }: EstateItemProps) => {
    const { t } = useTranslation();

    return (
        <TouchableOpacity
            style={[
                styles.card, 
                estate.favourite && styles.cardFavourite
            ]}
            onPress={() => onPress(estate.id)}
            activeOpacity={0.7}
        >
            <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>
                    {estate.name}
                </Text>
                <View style={styles.dateContainer}>
                    <Ionicons name="calendar-outline" size={14} color={colors.textSecondary} />
                    <Text style={styles.dateText}>
                        {t('estate.created', { date: formatDate(estate.createdDate) })}
                    </Text>
                </View>
            </View>

            <View style={styles.iconContainer}>
                {estate.favourite ? (
                    <Ionicons name="star" size={24} color={colors.favorite} />
                ) : (
                    <Ionicons name="star-outline" size={24} color={colors.border} />
                )}
            </View>
        </TouchableOpacity>
    );
};