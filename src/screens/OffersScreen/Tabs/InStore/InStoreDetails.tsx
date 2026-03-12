import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../routes/AppNavigator';
import { Colors } from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import { hp, wp } from '../../../../utils/Responsive';
import MapSection from '../../../../components/MapSection';
import OfferHeader from '../../../../components/Offers/Details/OfferHeader';
import OfferDetailsSection from '../../../../components/Offers/Details/OfferDetailsSection';
import TermsSection from '../../../../components/Offers/Details/TermsSection';



type RouteProps = RouteProp<RootStackParamList, 'InStoreDetails'>;
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function InStoreDetails() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <OfferHeader
          name={item.name}
          cashback={item.cashback}
          image={item.image}
        />

        <OfferDetailsSection location="8100 S Roberts Rd Justice, IL 60458" />

        <View style={styles.mapWrapper}>
          <MapSection />
        </View>

        <TermsSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: wp('4%'),
  },

  mapWrapper: {
    height: hp('25%'),
    justifyContent: 'center',
  },
});
