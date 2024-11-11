import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useUser } from '../../../src/context/UserContext';
import { lessons } from '../../../src/data/lessons';
import LessonCard from '../../../components/LessonCard';
import { useRouter } from 'expo-router';

export default function LessonsScreen() {
  const router = useRouter();
  const { userData } = useUser();

  const handleLessonPress = (lesson) => {
    router.push({
      pathname: '/lesson/[id]',
      params: { id: lesson.id }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LessonCard
            lesson={item}
            onPress={() => handleLessonPress(item)}
            completed={userData.completedLessons.includes(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listContent: {
    padding: 16,
  },
});