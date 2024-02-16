import { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(prefersDarkMode ? 'dark' : 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Não renderiza os filhos até que o tema seja definido
  if (theme === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  const { theme, toggleTheme, setTheme } = context; // Adicione setTheme aqui
  return { theme, toggleTheme, setTheme }; // E aqui
}