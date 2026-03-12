import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '../../theme/Colors';
import InStoreTab from '../../screens/OffersScreen/Tabs/InStore/InStoreTab';

import { wp, hp } from '../../utils/Responsive';
import { FontAwesome5 } from '@react-native-vector-icons/fontawesome5';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import OnlineTab from '../../screens/OffersScreen/Tabs/OnLine/OnlineTab';
const OfferTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<'inStore' | 'online'>('inStore');

  const renderContent = () => {
    switch (activeTab) {
      case 'inStore':
        return <InStoreTab />;
      case 'online':
        return <OnlineTab />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'inStore' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('inStore')}
        >
          <FontAwesome5
            name="store"
            iconStyle="solid"
            color={activeTab !== 'inStore' ? Colors.white : Colors.black}
            size={15}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'inStore' && styles.activeText,
            ]}
          >
            In-Store
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'online' && styles.activeTab]}
          onPress={() => setActiveTab('online')}
        >
          <MaterialDesignIcons
            name="web"
            color={activeTab !== 'online' ? Colors.white : Colors.black}
            size={15}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'online' && styles.activeText,
            ]}
          >
            Online
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

export default OfferTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 30,
    // marginHorizontal: wp('5%'),
    padding: 4,
  },

  tabButton: {
    flex: 1,
    paddingVertical: hp('1%'),
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  activeTab: {
    backgroundColor: Colors.green,
  },

  tabText: {
    color: Colors.white,
    fontWeight: '600',
    marginLeft: '3%',
  },

  activeText: {
    color: Colors.black,
  },

  content: {
    flex: 1,
    marginTop: hp('2%'),
  },
});
