export const LESSON_TYPES = {
  INTRODUCTION: 'introduction',
  VOCABULARY: 'vocabulary',
  PRACTICE: 'practice',
  SPEAKING: 'speaking',
};

export const LESSON_CATEGORIES = {
  BASICS: 'basics',
  GREETINGS: 'greetings',
  NUMBERS: 'numbers',
  PHRASES: 'phrases',
};

export const lessons = [
  {
    id: '1',
    category: LESSON_CATEGORIES.BASICS,
    title: 'Basic Greetings',
    level: 1,
    xpReward: 50,
    content: [
      {
        type: LESSON_TYPES.INTRODUCTION,
        text: "Let's learn some basic French greetings!",
      },
      {
        type: 'vocabulary',
        items: [
          {
            french: 'Bonjour',
            english: 'Hello',
            pronunciation: 'bohn-ZHOOR',
            audioUrl: 'bonjour.mp3',
          },
          {
            french: 'Au revoir',
            english: 'Goodbye',
            pronunciation: 'oh ruh-VWAR',
            audioUrl: 'aurevoir.mp3',
          },
          {
            french: 'Merci',
            english: 'Thank you',
            pronunciation: 'mair-SEE',
            audioUrl: 'merci.mp3',
          },
        ],
      },
      {
        type: 'practice',
        questions: [
          {
            type: 'multiple-choice',
            question: 'How do you say "Hello" in French?',
            options: ['Bonjour', 'Merci', 'Au revoir'],
            correctAnswer: 'Bonjour',
          },
          {
            type: 'translation',
            prompt: 'Translate: Thank you',
            correctAnswer: 'Merci',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    category: LESSON_CATEGORIES.BASICS,
    title: 'Numbers 1-10',
    level: 1,
    xpReward: 50,
    content: [
      {
        type: LESSON_TYPES.INTRODUCTION,
        text: "Let's learn to count in French!",
      },
      {
        type: 'vocabulary',
        items: [
          {
            french: 'Un',
            english: 'One',
            pronunciation: 'uhn',
            audioUrl: 'un.mp3',
          },
          {
            french: 'Deux',
            english: 'Two',
            pronunciation: 'duh',
            audioUrl: 'deux.mp3',
          },
          {
            french: 'Trois',
            english: 'Three',
            pronunciation: 'twah',
            audioUrl: 'trois.mp3',
          },
          {
            french: 'Quatre',
            english: 'Four',
            pronunciation: 'katr',
            audioUrl: 'quatre.mp3',
          },
          {
            french: 'Cinq',
            english: 'Five',
            pronunciation: 'sank',
            audioUrl: 'cinq.mp3',
          },
        ],
      },
      {
        type: 'practice',
        questions: [
          {
            type: 'multiple-choice',
            question: 'How do you say "Three" in French?',
            options: ['Deux', 'Trois', 'Quatre'],
            correctAnswer: 'Trois',
          },
          {
            type: 'translation',
            prompt: 'Translate: Five',
            correctAnswer: 'Cinq',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    category: LESSON_CATEGORIES.PHRASES,
    title: 'Common Phrases',
    level: 1,
    xpReward: 75,
    content: [
      {
        type: LESSON_TYPES.INTRODUCTION,
        text: "Let's learn some essential French phrases!",
      },
      {
        type: 'vocabulary',
        items: [
          {
            french: "S'il vous plaît",
            english: 'Please',
            pronunciation: 'seel voo pleh',
            audioUrl: 'silvousplait.mp3',
          },
          {
            french: "Je m'appelle",
            english: 'My name is',
            pronunciation: 'zhuh mah-pel',
            audioUrl: 'jemappelle.mp3',
          },
          {
            french: 'Comment allez-vous?',
            english: 'How are you?',
            pronunciation: 'koh-mahn tah-lay voo',
            audioUrl: 'commentallezvous.mp3',
          },
        ],
      },
      {
        type: LESSON_TYPES.SPEAKING,
        words: [
          {
            french: "S'il vous plaît",
            pronunciation: 'seel voo pleh',
            english: 'Please',
          },
          {
            french: "Je m'appelle",
            pronunciation: 'zhuh mah-pel',
            english: 'My name is',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    category: LESSON_CATEGORIES.GREETINGS,
    title: 'Time-Based Greetings',
    level: 2,
    xpReward: 60,
    content: [
      {
        type: LESSON_TYPES.INTRODUCTION,
        text: "Let's learn how to greet people at different times of the day!",
      },
      {
        type: 'vocabulary',
        items: [
          {
            french: 'Bon matin',
            english: 'Good morning',
            pronunciation: 'bohn mah-tan',
            audioUrl: 'bonmatin.mp3',
          },
          {
            french: 'Bonne après-midi',
            english: 'Good afternoon',
            pronunciation: 'bohn ah-preh mee-dee',
            audioUrl: 'bonneapresmidi.mp3',
          },
          {
            french: 'Bonsoir',
            english: 'Good evening',
            pronunciation: 'bohn-swahr',
            audioUrl: 'bonsoir.mp3',
          },
          {
            french: 'Bonne nuit',
            english: 'Good night',
            pronunciation: 'bohn nwee',
            audioUrl: 'bonnenuit.mp3',
          },
        ],
      },
      {
        type: 'practice',
        questions: [
          {
            type: 'multiple-choice',
            question: 'Which greeting would you use in the evening?',
            options: ['Bon matin', 'Bonsoir', 'Bonne nuit'],
            correctAnswer: 'Bonsoir',
          },
          {
            type: 'translation',
            prompt: 'Translate: Good morning',
            correctAnswer: 'Bon matin',
          },
        ],
      },
    ],
  }
]; 