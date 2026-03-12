import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Header from '../../components/Header';
import OfferCard from '../../components/Offers/OfferCard';
import OfferHeader from '../../components/Offers/Details/OfferHeader';
import OfferDetailsSection from '../../components/Offers/Details/OfferDetailsSection';
import TermsSection from '../../components/Offers/Details/TermsSection';
import MapSection from '../../components/MapSection';

import { Colors } from '../../theme/Colors';
import { GlobalImages } from '../../assets/Images';
import { OfferItem } from '../OffersScreen/OfferType';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const DATA: OfferItem[] = [
  {
    id: 1,
    name: 'Embers Top House',
    cashback: '5% cash back ($50 min.)*',
    image: GlobalImages.Instore1,
    lat: 37.78825,
    lng: -122.4324,
  },
  {
    id: 2,
    name: 'Starbucks',
    cashback: '3% cash back',
    isDate: true,
    image: GlobalImages.Instore2,
  },
  {
    id: 3,
    name: 'Ocean Breeze Cafe',
    cashback: '2% cash back',
    image: GlobalImages.Instore1,
  },
  {
    id: 4,
    name: 'Mountain View Bistro',
    cashback: '4% cash back',
    image: GlobalImages.Instore2,
  },
];

export default function ExpandableMapScreen() {
  const sheetHeight = height * 0.65;
  const navigation = useNavigation<any>();

  const translateY = useRef(new Animated.Value(sheetHeight * 0.4)).current;

  const [selectedStore, setSelectedStore] = useState<OfferItem | null>(null);

  const openSheet = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: sheetHeight * 0.4,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setSelectedStore(null);
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 120) {
          closeSheet();
        } else {
          openSheet();
        }
      },
    }),
  ).current;

  const renderItem = ({ item }: { item: OfferItem }) => (
    <View style={styles.card}>
      <OfferCard
        image={item.image}
        name={item.name}
        cashback={item.cashback}
        isMiles
        isDate={item.isDate}
        onPress={() => {
          setSelectedStore(item);
          openSheet();
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        Styles={{ paddingHorizontal: '4%' }}
        title="Near you"
        onBackPress={() => navigation.goBack()}
      />

      {/* MAP */}
      <MapView
        style={styles.map}
        key="details-map"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {DATA.map(store => (
          <Marker
            key={store.id}
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        ))}
      </MapView>

      {/* BOTTOM SHEET */}
      <Animated.View
        style={[styles.sheet, { transform: [{ translateY }] }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.handle} />

        {selectedStore ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.detailsContainer}
          >
            <TouchableOpacity style={styles.backBtn} onPress={closeSheet}>
              <Text style={styles.backText}>X</Text>
            </TouchableOpacity>
            <OfferHeader
              name={selectedStore.name}
              cashback={selectedStore.cashback}
              image={selectedStore.image}
            />

            <OfferDetailsSection location="8100 S Roberts Rd Justice, IL 60458" />

            {/* <View style={styles.mapWrapper}>
              <MapSection />
            </View> */}

            <TermsSection />
          </ScrollView>
        ) : (
          <FlatList
            data={DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  map: {
    flex: 1,
  },

  sheet: {
    position: 'absolute',
    bottom: 0,
    height: height * 0.65,
    width: '100%',
    backgroundColor: Colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },

  card: {},

  detailsContainer: {
    paddingHorizontal: '4%',
    paddingBottom: 40,
  },

  mapWrapper: {
    height: height * 0.25,
    justifyContent: 'center',
  },

  backBtn: {
    marginVertical: '4%',
    alignSelf: 'flex-end',
    backgroundColor: Colors.border,
    paddingHorizontal: '3.5%',
    paddingVertical: '2%',
    borderRadius: 50 / 2,
  },

  backText: {
    color: Colors.white,
    fontWeight: '400',
  },
});
