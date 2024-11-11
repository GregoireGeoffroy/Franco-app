import { Stack } from 'expo-router';
import { UserProvider } from '../src/context/UserContext';
import { ThemeProvider } from '../src/context/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="lesson/[id]" 
            options={{
              headerShown: true,
              title: 'Lesson',
              presentation: 'modal'
            }} 
          />
        </Stack>
      </UserProvider>
    </ThemeProvider>
  );
} 