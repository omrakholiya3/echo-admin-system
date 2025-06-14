
import { createContext, useContext, useState, ReactNode } from 'react';

type ColorTheme = 'blue' | 'green' | 'purple' | 'orange' | 'red';

interface ColorThemeContextType {
  currentTheme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  getThemeColors: () => {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

const themeColors = {
  blue: {
    primary: 'bg-blue-500',
    secondary: 'bg-blue-100',
    accent: 'text-blue-600',
    gradient: 'from-blue-400 to-blue-600',
  },
  green: {
    primary: 'bg-green-500',
    secondary: 'bg-green-100',
    accent: 'text-green-600',
    gradient: 'from-green-400 to-green-600',
  },
  purple: {
    primary: 'bg-purple-500',
    secondary: 'bg-purple-100',
    accent: 'text-purple-600',
    gradient: 'from-purple-400 to-purple-600',
  },
  orange: {
    primary: 'bg-orange-500',
    secondary: 'bg-orange-100',
    accent: 'text-orange-600',
    gradient: 'from-orange-400 to-orange-600',
  },
  red: {
    primary: 'bg-red-500',
    secondary: 'bg-red-100',
    accent: 'text-red-600',
    gradient: 'from-red-400 to-red-600',
  },
};

export const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>('blue');

  const setTheme = (theme: ColorTheme) => {
    setCurrentTheme(theme);
  };

  const getThemeColors = () => themeColors[currentTheme];

  return (
    <ColorThemeContext.Provider value={{ currentTheme, setTheme, getThemeColors }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider');
  }
  return context;
};
