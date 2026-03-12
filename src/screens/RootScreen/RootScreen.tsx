import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppNavigator from '../../routes/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../theme/Colors';

const RootScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default RootScreen;
