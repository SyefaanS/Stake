import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../theme/Colors';
import { GlobalImages } from '../../../assets/Images';

interface Props {
  label: string;
  value?: string;
  isImage?: boolean;
}

export default function DetailRow({ label, value, isImage }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      {isImage ? (
        <View style={styles.rowDirect}>
          <Image source={GlobalImages.Visa} style={{ marginLeft: '4%' }} />
          <Image source={GlobalImages.Master} />
          <Image source={GlobalImages.American} style={{ bottom: '6%' }} />
        </View>
      ) : (
        <Text style={styles.rowValue}>{value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '4%',
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  rowDirect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLabel: {
    color: '#F4FDFA',
    fontWeight: '400',
  },

  rowValue: {
    color: '#F4FDFA',
    fontWeight: '500',
  },
});
