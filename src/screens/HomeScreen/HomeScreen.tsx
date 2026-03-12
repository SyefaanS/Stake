import React, { FC, useCallback } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderWallet from '../../components/Dashboard/HeaderWallet';
import Card from '../../components/Dashboard/Card';

import { Colors } from '../../theme/Colors';
import { hp, wp } from '../../utils/Responsive';
import { GlobalImages } from '../../assets/Images';

const HomeScreen: FC = () => {
  const navigation = useNavigation<any>();

  const handleNeighborhoodPress = useCallback(() => {
    navigation.navigate('NeighbourHoodScreen');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Wallet Header */}
        <HeaderWallet />

        {/* Intro Text */}
        <Text style={styles.heading}>
          {"Let's use some of that cash..."}
        </Text>

        {/* Credit Card Section */}
        <Card
          logo={GlobalImages.BankLogo}
          title="Get Cash, Build Credit"
          description="Boost credit, earn unlimited $ Cash Back, free checking, and more."
          buttonText="Join Stake Saver ›"
        />

        {/* Activated Deals */}
        <Text style={styles.sectionTitle}>Activated Deals</Text>

        <Card
          logo={GlobalImages.CardLogo}
          title="Neighborhood Network"
          description={`Link any debit or credit card and earn up to 10% Cash Back at thousands
more in potential rewards on 35,000+ brands.`}
          buttonText="View ›"
          isActivate
          onPress={handleNeighborhoodPress}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  scrollContent: {
    padding: wp('5%'),
  },

  heading: {
    color: Colors.white,
    fontSize: wp('5%'),
    fontWeight: '700',
    marginBottom: hp('2%'),
  },

  sectionTitle: {
    color: Colors.white,
    fontSize: wp('4%'),
    fontWeight: '600',
    marginBottom: hp('1.5%'),
  },
});