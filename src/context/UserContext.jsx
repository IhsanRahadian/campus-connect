import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    profile: {},
    academic: {},
    career: {},
    interests: {},
    connections: [],
    notifications: []
  });

  const updateUserData = (section, data) => {
    setUserData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const addConnection = (connection) => {
    setUserData(prev => ({
      ...prev,
      connections: [...prev.connections, connection]
    }));
  };

  const value = {
    userData,
    updateUserData,
    addConnection
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);