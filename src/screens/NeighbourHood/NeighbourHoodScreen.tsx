import React, { useCallback } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import { hp, wp } from '../../utils/Responsive';
import MenuCard from '../../components/NeighbourHood/MenuCard';
import { Colors } from '../../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import MapSection from '../../components/MapSection';
import Feather from '@react-native-vector-icons/simple-line-icons';

const NeighborhoodScreen = () => {
  const navigation = useNavigation<any>();

  const handlePress = useCallback(() => {
    navigation.navigate('OffersScreen');
  }, [navigation]);
    const handleRewardPress = useCallback(() => {
    navigation.navigate('MyRewardsScreen');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Header
          title="Neighborhood Network"
          onBackPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Browse merchants near you</Text>

        <Pressable style={{ flexDirection: 'row' }} onPress={()=> navigation.navigate('ExpandableScreen')}>
          <Text style={styles.subtitle}>
            Tap to expand the map to find offers near you
          </Text>
          <Feather
            name="share-alt"
            color={Colors.white}
            size={18}
            style={{ marginLeft: '3%' }}
          />
        </Pressable>

        {/* Map */}
        <MapSection />

        {/* Menu */}
        <MenuCard
          title="My Cards"
          description="Link your credit or debit cards securely."
        />

        <MenuCard
          title="Brands & Offers"
          description="Find deals and earn rewards effortlessly."
          onPress={handlePress}
        />

        <MenuCard
          title="My Rewards"
          description="See how much you've earned so far."
          onPress={handleRewardPress}
        />
      </ScrollView>
    </View>
  );
};

export default NeighborhoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: wp('5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  back: {
    color: Colors.white,
    fontSize: wp('6%'),
  },
  title: {
    color: Colors.white,
    fontSize: wp('4.5%'),
    fontWeight: '600',
    lineHeight: hp('3%'),
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: wp('3.2%'),
    marginBottom: hp('2%'),
  },
});
