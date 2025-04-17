// src/ui/ThemeProvider.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#0047AB' },
    secondary: { main: '#FF6F00' },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

interface TezUIThemeProviderProps {
  children: React.ReactNode;
}

export const TezUIThemeProvider: React.FC<TezUIThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
