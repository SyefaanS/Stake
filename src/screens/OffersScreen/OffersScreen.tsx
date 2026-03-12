import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OfferTabs from '../../components/Tab/OfferTabs';
import { hp, wp } from '../../utils/Responsive';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/Colors';

export default function OffersScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Header title="Brands & offers" onBackPress={() => navigation.goBack()} />

      <OfferTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: hp('2%'),
  },
  title: {
    color: '#fff',
    fontSize: wp('5%'),
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  search: {
    backgroundColor: '#111c2f',
    marginHorizontal: wp('5%'),
    borderRadius: 10,
    paddingHorizontal: 15,
    height: hp('5%'),
    color: '#fff',
    marginBottom: hp('2%'),
  },
});
