import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../theme/Colors";
import { hp, wp } from "../../utils/Responsive";


interface Props {
 title: string;
 description: string;
 onPress?: ()=> void
}

const MenuCard: React.FC<Props> = ({ title, description , onPress  }) => {
 return (
  <TouchableOpacity style={styles.card} onPress={onPress}>
   <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.desc}>{description}</Text>
   </View>

   <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
 );
};

export default MenuCard;

const styles = StyleSheet.create({
 card: {
  backgroundColor: Colors.card,
  borderRadius: wp("4%"),
  padding: wp("4%"),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: hp("1.5%"),
  borderWidth: 1,
  borderColor: Colors.border
 },
 title: {
  color: Colors.white,
  fontSize: wp("4%"),
  fontWeight: "600"
 },
 desc: {
  color: Colors.textSecondary,
  fontSize: wp("3.2%"),
  marginTop: hp("0.3%")
 },
 arrow: {
  color: Colors.white,
  fontSize: wp("6%")
 }
});