import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { hp } from '../../../utils/Responsive';
import { Colors } from '../../../theme/Colors';

export default function TermsSection() {
  return (
    <View style={styles.termsWrapper}>
      <Text style={styles.termsTitle}>Terms and condition</Text>

      <Text style={styles.termsText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo dolor,
        rutrum et nisi eu, interdum accumsan augue. Aliquam porttitor, nisi nec
        pharetra porta, nibh nisl tincidunt quam, non ornare arcu lectus sed
        augue. In massa odio, semper quis dui nec, posuere commodo neque. Mauris
        posuere augue nec nisl varius, blandit luctus dui ultrices. Sed eleifend
        tincidunt odio in volutpat. Ut augue nisi, elementum a placerat
        convallis, rutrum et ipsum. Maecenas ac mauris vehicula, rutrum lectus
        commodo, efficitur urna. Mauris nec justo viverra, porttitor orci vitae,
        efficitur lorem.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  termsWrapper: {
    height: hp('30%'),
  },

  termsTitle: {
    color: Colors.white,
    fontWeight: '600',
    paddingBottom: '3%',
  },

  termsText: {
    color: Colors.white,
  },
});
