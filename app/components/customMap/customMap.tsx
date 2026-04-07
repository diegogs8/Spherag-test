import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './customMap.styles';

interface CustomMapProps {
  latitude: number;
  longitude: number;
  markerTitle?: string;
  markerDescription?: string;
}

export const CustomMap = ({ 
  latitude, 
  longitude, 
  markerTitle, 
  markerDescription 
}: CustomMapProps) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title={markerTitle}
          description={markerDescription}
        />
      </MapView>
    </View>
  );
};