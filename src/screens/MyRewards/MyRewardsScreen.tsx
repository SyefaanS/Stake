import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/Colors';
import { hp } from '../../utils/Responsive';

const DATA = [
  {
    id: 1,
    name: 'Embers Tap House',
    date: 'September 02, 2025 09:36',
    price: '$5.00',
  },
  {
    id: 2,
    name: 'Ocean Breeze Café',
    date: 'September 02, 2025 09:36',
    price: '$7.00',
  },
];

const MyRewardsScreen = () => {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.row}>
        {/* Left Section */}
        <View style={styles.left}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>

        {/* Right Section */}
        <Text style={styles.price}>{item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="My Rewards" onBackPress={() => navigation.goBack()} />

      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyRewardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '4%',
    backgroundColor: Colors.background,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  left: {
    flex: 1,
  },

  name: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },

  date: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 4,
  },

  price: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
