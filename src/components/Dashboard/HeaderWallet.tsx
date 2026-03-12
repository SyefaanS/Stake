import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';
import { hp, wp } from '../../utils/Responsive';
import Feather from '@react-native-vector-icons/feather';

const HeaderWallet: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wallet}>
        <Text style={styles.walletText}>Wallet: $160</Text>
      </View>
      <View style={styles.iconContainer}>
        <Feather name="user" size={20} color={Colors.white} />
      </View>
    </View>
  );
};

export default HeaderWallet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: hp('2%'),
  },
  wallet: {
    backgroundColor: Colors.badge,
    width: wp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('5%'),
    marginRight: wp('3%'),
  },
  walletText: {
    color: '#54FF99',
    fontSize: wp('3.5%'),
    fontWeight: '600',
  },
  iconContainer: {
    backgroundColor: Colors.iconBack,
    width: wp('10%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50 / 2,
  },
});
