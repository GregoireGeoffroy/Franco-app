import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useUser } from '../../src/context/UserContext';
import ProgressCard from '../../components/ProgressCard';
import DailyGoalCard from '../../components/DailyGoalCard';

export default function HomeScreen() {
  const { userData } = useUser();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Bonjour! 👋</Text>
      {userData && (
        <>
          <ProgressCard 
            level={userData.level} 
            experience={userData.experience} 
          />
          <DailyGoalCard 
            streak={userData.dailyStreak} 
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
}); 