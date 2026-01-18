import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { bazaarPosts } from '../data/mockData';

export const BazaarScreen = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query) {
      return bazaarPosts;
    }
    const lowerQuery = query.toLowerCase();
    return bazaarPosts.filter((post) =>
      [post.title, post.description, post.location].some((field) =>
        field.toLowerCase().includes(lowerQuery),
      ),
    );
  }, [query]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bazaar</Text>
      <Text style={styles.subtitle}>Post items or services for the community.</Text>

      <TextInput
        placeholder="Search by keyword or location"
        placeholderTextColor="#7680A6"
        style={styles.searchInput}
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.grid}>
        {results.map((post) => (
          <View key={post.id} style={styles.card}>
            <Text style={styles.cardTitle}>{post.title}</Text>
            <Text style={styles.cardDescription}>{post.description}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.metaText}>{post.location}</Text>
              <Text style={styles.metaText}>{post.contact}</Text>
            </View>
          </View>
        ))}
      </View>
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
  searchInput: {
    backgroundColor: '#151827',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  grid: {
    gap: 12,
  },
  card: {
    backgroundColor: '#151827',
    borderRadius: 16,
    padding: 16,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#B3B8D1',
    fontSize: 13,
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    color: '#8FA0FF',
    fontSize: 12,
  },
});
