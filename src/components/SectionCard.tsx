import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export const SectionCard = ({ title, children }: SectionCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#151827',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    color: '#F2F4FF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  content: {
    gap: 12,
  },
});
