import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

import { Colors } from '../../theme/Colors';
import { hp, wp } from '../../utils/Responsive';

interface CashCardProps {
  logo?: ImageSourcePropType,
  title?: string;
  description?: string;
  buttonText?: string;
  isActivate?: boolean
  onPress?: () => void;
}

const CashCard: FC<CashCardProps> = ({
  logo,
  title,
  isActivate,
  description,
  buttonText,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      {isActivate &&
      <View style={styles.badge}>
              <Text style={styles.badgeText}>Activated</Text>
            </View>
      }
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.link}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(CashCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: wp('4%'),
    padding: wp('5%'),
    marginBottom: hp('3%'),
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: hp('1%'),
  },

   badge: {
    alignSelf: "flex-end",
    backgroundColor: Colors.badge,
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("0.4%"),
    borderRadius: wp("3%"),
    marginBottom: hp("1%")
  },
  badgeText: {
    color: Colors.green,
    fontSize: wp("3%"),
    fontWeight: "600"
  },
  logo: {
    height: hp('10%'),
    resizeMode: 'contain',
  },

  title: {
    color: Colors.green,
    fontSize: wp('4%'),
    fontWeight: '700',
    marginTop: hp('0.5%'),
  },

  description: {
    color: Colors.textSecondary,
    fontSize: wp('3.5%'),
    marginBottom: hp('1.5%'),
    lineHeight: hp('2.5%'),
    textAlign: 'center',
  },

  button: {
    alignSelf: 'flex-end',
  },

  link: {
    color: Colors.green,
    fontSize: wp('3.6%'),
    fontWeight: '600',
  },
});
