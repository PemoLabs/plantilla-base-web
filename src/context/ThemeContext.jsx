import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const themes = {
  corporate: {
    primary: '#1A365D',
    secondary: '#2B6CB0',
    accent: '#F59E0B',
    light: '#F8F9FA',
    dark: '#212529',
    white: '#FFFFFF'
  },
  health: {
    primary: '#2C7A7B',
    secondary: '#48BB78',
    accent: '#F6AD55',
    light: '#F0FFF4',
    dark: '#1A202C',
    white: '#FFFFFF'
  },
  creative: {
    primary: '#6B46C1',
    secondary: '#D53F8C',
    accent: '#F6E05E',
    light: '#FAF5FF',
    dark: '#1A202C',
    white: '#FFFFFF'
  },
  earth: {
    primary: '#744210',
    secondary: '#8B5A2B',
    accent: '#68D391',
    light: '#F6EADB',
    dark: '#2D3748',
    white: '#FFFFFF'
  },
  modern: {
    primary: '#1A202C',
    secondary: '#718096',
    accent: '#E53E3E',
    light: '#EDF2F7',
    dark: '#1A202C',
    white: '#FFFFFF'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('corporate');

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    const theme = themes[themeName];
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-light', theme.light);
    root.style.setProperty('--color-dark', theme.dark);
    root.style.setProperty('--color-white', theme.white);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);