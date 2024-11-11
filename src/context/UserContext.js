import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    level: 1,
    experience: 0,
    completedLessons: [],
    dailyStreak: 0,
  });

  const updateUserData = async (newData) => {
    setUserData(prev => ({
      ...prev,
      ...newData
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
