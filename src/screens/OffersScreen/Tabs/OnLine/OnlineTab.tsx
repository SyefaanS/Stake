import React, { useState, useEffect, useMemo } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';

import SearchInput from '../../../../components/Offers/SearchInput';
import OfferSkeleton from '../../../../components/Offers/OfferSkeleton';
import OfferCard from '../../../../components/Offers/OfferCard';
import { Colors } from '../../../../theme/Colors';
import { hp, wp } from '../../../../utils/Responsive';
import { GlobalImages } from '../../../../assets/Images';
import { OfferItem } from '../../OfferType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../routes/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'InStoreDetails'
>;

const DATA: OfferItem[] = [
  {
    id: 1,
    name: 'Netflix',
    cashback: '5% cash back',
    image: GlobalImages.Netflix,
  },
  {
    id: 2,
    name: 'Amazon',
    cashback: '2% cash back',
    image: GlobalImages.Netflix,
  },
  {
    id: 3,
    name: 'Apple Store',
    cashback: '3% cash back',
    image: GlobalImages.Netflix,
  },
  {
    id: 4,
    name: 'Walmart',
    cashback: '4% cash back',
    image: GlobalImages.Netflix,
  },
];

export default function OnlineTab() {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredData = useMemo(() => {
    if (!search) return DATA;

    return DATA.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  //   if (loading) {
  //     return <OfferSkeleton />;
  //   }

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <SearchInput value={search} onChangeText={setSearch} />
      {loading ? (
        <OfferSkeleton />
      ) : (
        <>
          {/* Offer List */}
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <OfferCard
                name={item.name}
                cashback={item.cashback}
                image={item.image}
                onPress={() => navigation.navigate('OnlineDetails', { item })}
              />
            )}
            ListEmptyComponent={<View style={styles.empty} />}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchInput: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    // marginHorizontal: wp('5%'),
    marginBottom: hp('2%'),
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    height: hp('5%'),
    color: Colors.white,
  },

  empty: {
    height: hp('10%'),
  },
});
