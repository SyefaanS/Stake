import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DetailRow from './DetailRow';
import { hp } from '../../../utils/Responsive';

interface Props {
  location: string;
}

export default function OfferDetailsSection({ location }: Props) {
  return (
    <View style={styles.detailsWrapper}>
      <Text style={styles.title}>Offer Details</Text>

      <DetailRow label="Expires On" value="Oct 1, 2025" />
      <DetailRow label="Location" value={location} />
      <DetailRow label="Networks" isImage/>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsWrapper: {
    height: hp('25%'),
    justifyContent: 'space-evenly',
  },

  title: {
    color: '#fff',
    fontWeight: '600',
  },
});
