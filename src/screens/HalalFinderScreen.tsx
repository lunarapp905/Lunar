import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { restaurants } from '../data/mockData';

const verificationFilters = ['All', 'Verified', 'Needs Review'];

export const HalalFinderScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredRestaurants = useMemo(() => {
    if (selectedFilter === 'All') {
      return restaurants;
    }
    return restaurants.filter((item) => item.verification === selectedFilter);
  }, [selectedFilter]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Halal Finder</Text>
      <Text style={styles.subtitle}>Browse verified halal options near you.</Text>

      <View style={styles.filterRow}>
        {verificationFilters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterChip, filter === selectedFilter && styles.filterChipActive]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                filter === selectedFilter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: 40.7128,
            longitude: -74.006,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
          }}
        >
          {filteredRestaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              coordinate={{ latitude: 40.7128, longitude: -74.006 }}
              title={restaurant.name}
              description={restaurant.address}
            />
          ))}
        </MapView>
        <View style={styles.mapOverlay}>
          <Text style={styles.mapOverlayText}>Map View (sample pins)</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Closest results</Text>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Use my location</Text>
        </TouchableOpacity>
      </View>

      {filteredRestaurants.map((restaurant) => (
        <View key={restaurant.id} style={styles.restaurantCard}>
          <View>
            <Text style={styles.listTitle}>{restaurant.name}</Text>
            <Text style={styles.listSubtitle}>{restaurant.address}</Text>
            <Text style={styles.listSubtitle}>{restaurant.halalType}</Text>
          </View>
          <View style={styles.badges}>
            <Text style={styles.distance}>{restaurant.distance}</Text>
            <Text style={styles.verificationBadge}>{restaurant.verification}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0B0D17',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#B3B8D1',
    fontSize: 14,
    marginBottom: 16,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  filterChip: {
    borderWidth: 1,
    borderColor: '#2B3048',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  filterChipActive: {
    backgroundColor: '#5565FF',
    borderColor: '#5565FF',
  },
  filterText: {
    color: '#B3B8D1',
    fontSize: 12,
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  mapContainer: {
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  mapOverlay: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(11, 13, 23, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  mapOverlayText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  locationButton: {
    backgroundColor: '#1E2335',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  locationButtonText: {
    color: '#8FA0FF',
    fontSize: 12,
  },
  restaurantCard: {
    backgroundColor: '#151827',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  listSubtitle: {
    color: '#B3B8D1',
    fontSize: 12,
    marginTop: 4,
  },
  badges: {
    alignItems: 'flex-end',
    gap: 6,
  },
  distance: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  verificationBadge: {
    color: '#1CE7B6',
    fontSize: 12,
  },
});
