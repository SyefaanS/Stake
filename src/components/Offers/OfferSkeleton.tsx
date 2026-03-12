import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View, StyleSheet } from 'react-native';

export default function OfferSkeleton() {
  return (
    <SkeletonPlaceholder>
      {[1, 2, 3, 4, 5].map(item => (
        <View key={item} style={styles.card}>
          <View style={styles.cardWrapper}>
            {/* Logo Placeholder */}
            <View style={styles.logo} />

            {/* Text Section */}
            <View style={styles.textContainer}>
              <View style={styles.title} />
              <View style={styles.sub} />
              <View style={styles.tag} />
            </View>
          </View>

        
        </View>
      ))}
    </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#1e2a3d',
    justifyContent: 'space-between',
  },

  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 10,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    width: 140,
    height: 14,
    borderRadius: 4,
    marginBottom: 6,
  },

  sub: {
    width: 90,
    height: 10,
    borderRadius: 4,
    marginBottom: 6,
  },

  tag: {
    width: 120,
    height: 14,
    borderRadius: 15,
    marginTop: 4,
  },

 
});