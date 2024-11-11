import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DailyGoalCard({ streak }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Streak</Text>
      <Text style={styles.streak}>{streak} days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  streak: {
    fontSize: 16,
    color: '#666',
  },
});
