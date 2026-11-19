'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem('tech22blocks_theme') as Theme | null;
      if (storedTheme === 'light' || storedTheme === 'dark') {
        setThemeState(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setThemeState('light');
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        setThemeState('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch {
      setThemeState('dark');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('tech22blocks_theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // ignore in restricted environments
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
