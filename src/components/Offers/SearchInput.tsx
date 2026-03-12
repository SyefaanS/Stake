import React, { FC } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import { hp, wp } from '../../utils/Responsive';
import { Colors } from '../../theme/Colors';



interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchInput: FC<Props> = ({
  value,
  onChangeText,
  placeholder = 'Search by brands',
}) => {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={18}
        color="#999"
        style={styles.icon}
      />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('1%'),
    borderRadius: 10,
    paddingHorizontal: wp('3%'),
    height: hp('5%'),
    borderWidth:1,
    borderColor:Colors.border
  },

  icon: {
    marginRight: wp('2%'),
  },

  input: {
    flex: 1,
    color: Colors.white,
    fontSize: 14,
  },
});