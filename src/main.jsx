// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { AuthProvider } from './hooks/auth';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './styles/ThemeContext';
import { Routes } from './routes';
import { light, dark } from './styles/theme';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <React.StrictMode>
      <StyledThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </StyledThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);