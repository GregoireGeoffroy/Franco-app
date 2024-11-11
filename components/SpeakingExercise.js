import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

export default function SpeakingExercise({ word, pronunciation, onComplete }) {
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    return () => {
      if (recording) recording.unloadAsync();
      if (sound) sound.unloadAsync();
    };
  }, []);

  const playCorrectPronunciation = async () => {
    try {
      setIsPlaying(true);
      await Speech.speak(word, {
        language: 'fr',
        rate: 0.8,
      });
      setIsPlaying(false);
    } catch (error) {
      console.error('Error playing pronunciation:', error);
      setIsPlaying(false);
    }
  };

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      
      setRecording(recording);
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      
      // Here you would typically send the audio file to a speech recognition API
      // For this example, we'll simulate a response
      simulateRecognitionResult();
      
      setAttempts(prev => prev + 1);
    } catch (error) {
      console.error('Failed to stop recording:', error);
    }
  };

  const simulateRecognitionResult = () => {
    // In a real app, you would send the audio to a speech recognition API
    // and get back a confidence score
    const randomScore = Math.random();
    if (randomScore > 0.7) {
      onComplete(true);
    } else {
      onComplete(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.pronunciation}>/{pronunciation}/</Text>
      </View>

      <TouchableOpacity
        style={styles.pronunciationButton}
        onPress={playCorrectPronunciation}
        disabled={isPlaying}
      >
        <Ionicons name="volume-high" size={24} color="#4B7BF5" />
        <Text style={styles.buttonText}>Listen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.recordButton, isRecording && styles.recording]}
        onPress={isRecording ? stopRecording : startRecording}
      >
        <Ionicons
          name={isRecording ? "stop" : "mic"}
          size={32}
          color="white"
        />
      </TouchableOpacity>

      <Text style={styles.instruction}>
        {isRecording ? "Recording... Tap to stop" : "Tap to start recording"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  wordContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pronunciation: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  pronunciationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    marginLeft: 8,
    color: '#4B7BF5',
    fontSize: 16,
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4B7BF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  recording: {
    backgroundColor: '#FF4444',
  },
  instruction: {
    color: '#666',
    fontSize: 14,
  },
}); 