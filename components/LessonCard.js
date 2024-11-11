import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LessonCard({ lesson, onPress, completed }) {
  return (
    <TouchableOpacity 
      style={[styles.card, completed && styles.completedCard]} 
      onPress={onPress}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{lesson.title}</Text>
          {completed && (
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
          )}
        </View>
        <View style={styles.details}>
          <Text style={styles.level}>Level {lesson.level}</Text>
          <Text style={styles.xp}>+{lesson.xpReward} XP</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  completedCard: {
    backgroundColor: '#F8FFF8',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  level: {
    fontSize: 14,
    color: '#666',
  },
  xp: {
    fontSize: 14,
    color: '#4B7BF5',
    fontWeight: '500',
  },
}); 