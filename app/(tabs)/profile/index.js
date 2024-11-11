import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../../../src/context/UserContext';
import { useTheme } from '../../../src/context/ThemeContext';

export default function ProfileScreen() {
  const { userData } = useUser();
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: theme.colors.text,
    },
    text: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginBottom: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Level: {userData.level}</Text>
      <Text style={styles.text}>Experience: {userData.experience}</Text>
      <Text style={styles.text}>
        Completed Lessons: {userData.completedLessons.length}
      </Text>
    </View>
  );
} 