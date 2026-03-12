import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../theme/Colors";
import { hp, wp } from "../../utils/Responsive";


const DealCard: React.FC = () => {
  return (
    <View style={styles.card}>
  

      <Text style={styles.title}></Text>

      <Text style={styles.description}>
        Link any debit or credit card and earn up to 10% Cash Back at thousands
        more in potential rewards on 35,000+ brands.
      </Text>

      <TouchableOpacity>
        <Text style={styles.link}>View ›</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: wp("4%"),
    padding: wp("5%")
  },
 
  title: {
    color: Colors.blue,
    fontSize: wp("4%"),
    fontWeight: "700",
    marginBottom: hp("1%")
  },
  description: {
    color: Colors.textSecondary,
    fontSize: wp("3.5%"),
    marginBottom: hp("1.5%"),
    lineHeight: hp("2.5%")
  },
  link: {
    color: Colors.blue,
    fontSize: wp("3.6%"),
    fontWeight: "600"
  }
});