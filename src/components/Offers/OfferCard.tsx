import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GlobalImages } from '../../assets/Images';
import { hp, wp } from '../../utils/Responsive';
import { Colors } from '../../theme/Colors';

interface Props {
  name: string;
  cashback: string;
  isMiles?: boolean;
  isDate?: boolean;
  onPress?: () => void;
  image?: any,
}

export default function OfferCard({
  name,
  cashback,
  isMiles,
  isDate,
  onPress,
  image,
}: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardWrapper}>
        <Image source={image} style={styles.logo} />

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.sub}>{cashback}</Text>

          <View style={styles.tag}>
            <Text style={styles.tagText}>Stake 10% back on this</Text>
          </View>
        </View>
      </View>
      {isMiles && (
        <View>
          <Text style={styles.sub}>{'0.36 mile away'}</Text>
          {isDate && <Text style={styles.sub}>{'M-T-W-T-F'}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#1e2a3d',
  },
  cardWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center' },

  logo: {
    width: wp('12%'),
    height: hp('6%'),
    marginRight: 10,
    borderRadius: 6,
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
