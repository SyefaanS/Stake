import React, { useState, useEffect, useMemo } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';

import OfferSkeleton from '../../../../components/Offers/OfferSkeleton';
import OfferCard from '../../../../components/Offers/OfferCard';
import { Colors } from '../../../../theme/Colors';
import { hp, wp } from '../../../../utils/Responsive';
import SearchInput from '../../../../components/Offers/SearchInput';
import { OfferItem } from '../../OfferType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../routes/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { GlobalImages } from '../../../../assets/Images';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'InStoreDetails'
>;

const DATA: OfferItem[] = [
  {
    id: 1,
    name: 'Embers Top House',
    cashback: '5% cash back ($50 min.)*',
    image: GlobalImages.Instore1,
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

export default function InStoreTab() {
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

  // if (loading) {
  //   return <OfferSkeleton />;
  // }

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <SearchInput value={search} onChangeText={setSearch} />

      {loading ? (
        <OfferSkeleton />
      ) : (
        <>
          {/* List */}
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <OfferCard
                image={item.image}
                name={item.name}
                cashback={item.cashback}
                isMiles={true}
                isDate={item.isDate}
                onPress={() => navigation.navigate('InStoreDetails', { item })}
              />
            )}
            ListEmptyComponent={<View style={styles.emptySpace} />}
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
    marginBottom: hp('2%'),
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    height: hp('5%'),
    color: Colors.white,
  },

  emptySpace: {
    height: hp('10%'),
  },
});
