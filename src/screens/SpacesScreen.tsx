import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { announcements, events, spaces } from '../data/mockData';
import { SectionCard } from '../components/SectionCard';

export const SpacesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Spaces</Text>
      <SectionCard title="Your Spaces">
        {spaces.map((space) => (
          <View key={space.id} style={styles.listItem}>
            <View>
              <Text style={styles.listTitle}>{space.name}</Text>
              <Text style={styles.listSubtitle}>{space.description}</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        ))}
      </SectionCard>

      <SectionCard title="Upcoming Events">
        {events.map((event) => (
          <View key={event.id} style={styles.eventItem}>
            <Text style={styles.listTitle}>{event.title}</Text>
            <Text style={styles.listSubtitle}>{event.time}</Text>
            <Text style={styles.listSubtitle}>{event.location}</Text>
          </View>
        ))}
      </SectionCard>

      <SectionCard title="Announcements">
        {announcements.map((announcement) => (
          <View key={announcement.id} style={styles.eventItem}>
            <Text style={styles.listTitle}>{announcement.title}</Text>
            <Text style={styles.listSubtitle}>{announcement.body}</Text>
          </View>
        ))}
      </SectionCard>
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
    marginBottom: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  listTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  listSubtitle: {
    color: '#B3B8D1',
    fontSize: 13,
    marginTop: 4,
  },
  followButton: {
    backgroundColor: '#5565FF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  eventItem: {
    borderTopWidth: 1,
    borderTopColor: '#22263A',
    paddingVertical: 10,
  },
});
