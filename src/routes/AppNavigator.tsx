import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NeighbourHoodScreen from '../screens/NeighbourHood/NeighbourHoodScreen';
import OffersScreen from '../screens/OffersScreen/OffersScreen';
import InStoreDetails from '../screens/OffersScreen/Tabs/InStore/InStoreDetails';
import { OfferItem } from '../screens/OffersScreen/OfferType';
import OnlineDetails from '../screens/OffersScreen/Tabs/OnLine/OnlineDetails';
import MyRewardsScreen from '../screens/MyRewards/MyRewardsScreen';
import ExpandableMapScreen from '../screens/ExpandMap/ExpandableMapScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  NeighbourHoodScreen: undefined;
  OffersScreen: undefined;
  InStoreDetails: {
    item: OfferItem;
  };
  OnlineDetails:{
    item: OfferItem
  }
  MyRewardsScreen: undefined;
  ExpandableScreen: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="OffersScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="NeighbourHoodScreen"
          component={NeighbourHoodScreen}
        />
        <Stack.Screen name="OffersScreen" component={OffersScreen} />
        <Stack.Screen name="InStoreDetails" component={InStoreDetails} />
        <Stack.Screen name="OnlineDetails" component={OnlineDetails} />
        <Stack.Screen name="MyRewardsScreen" component={MyRewardsScreen} />
        <Stack.Screen name="ExpandableScreen" component={ExpandableMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
