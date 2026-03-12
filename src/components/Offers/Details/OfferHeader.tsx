import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { hp, wp } from '../../../utils/Responsive';
import { Colors } from '../../../theme/Colors';


interface Props {
  name: string;
  cashback: string;
  image: any;
}

export default function OfferHeader({ name, cashback, image }: Props) {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerTextWrapper}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.sub}>{cashback}</Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>Stake 10% back on this</Text>
        </View>
      </View>

      <Image source={image} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: hp('12%'),
    flexDirection: 'row',
  },

  headerTextWrapper: {
    flex: 1,
  },

  logo: {
    height: hp('10%'),
    width: wp('20%'),
    resizeMode: 'contain',
  },

  title: {
    color: '#fff',
    fontWeight: '600',
  },

  sub: {
    color: '#aaa',
    fontSize: 12,
    lineHeight: hp('3%'),
  },

  tag: {
    backgroundColor: Colors.badge,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
    marginTop: 4,
  },

  tagText: {
    color: '#54FF99',
    fontSize: 11,
  },
});