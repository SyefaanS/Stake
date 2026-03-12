import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { hp, wp } from '../utils/Responsive';

const MapSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.7749,
              longitude: -122.4194,
            }}
            title="Store"
          />
        </MapView>
      </View>
    </View>
  );
};

export default MapSection;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp('2%'),
  },

  mapWrapper: {
    width: '100%',
    height: hp('22%'),
    borderRadius: wp('4%'),
    overflow: 'hidden',
  },

  map: {
    flex: 1,
  },
});