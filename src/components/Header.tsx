import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { wp, hp } from '../utils/Responsive';
import { Colors } from '../theme/Colors';

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
  Styles?:any
}

const Header: FC<HeaderProps> = ({ title, onBackPress  , Styles}) => {
  return (
    <View style={[styles.header,Styles]}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

     {title &&  <Text style={styles.title}>{title}</Text>}

      {/* Right spacer to keep title centered */}
      <View style={styles.rightSpacer} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('2%'),
  },

  backButton: {
    width: wp('10%'),
    height: hp('5%'),
    backgroundColor: Colors.iconBack,
    alignItems: 'center',
    borderRadius: 50 / 2,
    justifyContent: 'center',
  },

  back: {
    color: Colors.white,
    fontSize: wp('4.5%'),
  },

  title: {
    color: Colors.white,
    fontSize: wp('4.5%'),
    fontWeight: '600',
  },

  rightSpacer: {
    width: wp('6%'),
  },
});
