import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useUser } from '../../src/context/UserContext';
import { lessons, LESSON_TYPES } from '../../src/data/lessons';
import SpeakingExercise from '../../components/SpeakingExercise';

export default function LessonScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { userData, updateUserData } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const lesson = lessons.find(l => l.id === id);
  
  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text>Lesson not found</Text>
      </View>
    );
  }

  const handleComplete = async () => {
    const newCompletedLessons = [...userData.completedLessons, lesson.id];
    const newExperience = userData.experience + lesson.xpReward;
    
    await updateUserData({
      completedLessons: newCompletedLessons,
      experience: newExperience,
    });
    
    router.back();
  };

  const renderContent = () => {
    if (!lesson.content || !lesson.content[currentStep]) {
      return null;
    }

    const content = lesson.content[currentStep];

    switch (content.type) {
      case LESSON_TYPES.INTRODUCTION:
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>{content.text}</Text>
          </View>
        );

      case LESSON_TYPES.VOCABULARY:
        return (
          <View style={styles.contentContainer}>
            {content.items.map((item, index) => (
              <View key={index} style={styles.vocabularyItem}>
                <Text style={styles.french}>{item.french}</Text>
                <Text style={styles.english}>{item.english}</Text>
                <Text style={styles.pronunciation}>/{item.pronunciation}/</Text>
              </View>
            ))}
          </View>
        );

      case LESSON_TYPES.SPEAKING:
        return (
          <View style={styles.contentContainer}>
            <SpeakingExercise
              word={content.words[currentWordIndex].french}
              pronunciation={content.words[currentWordIndex].pronunciation}
              onComplete={(success) => {
                if (success) {
                  if (currentWordIndex < content.words.length - 1) {
                    setCurrentWordIndex(prev => prev + 1);
                  } else {
                    setCurrentStep(prev => prev + 1);
                  }
                }
              }}
            />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {renderContent()}
      </ScrollView>
      
      <View style={styles.footer}>
        {currentStep > 0 && (
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setCurrentStep(prev => prev - 1)}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        
        {currentStep < (lesson.content?.length ?? 0) - 1 ? (
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setCurrentStep(prev => prev + 1)}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={[styles.button, styles.completeButton]}
            onPress={handleComplete}
          >
            <Text style={styles.buttonText}>Complete</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
  },
  vocabularyItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
  },
  french: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  english: {
    fontSize: 16,
    color: '#666',
  },
  pronunciation: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#4B7BF5',
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
}); 