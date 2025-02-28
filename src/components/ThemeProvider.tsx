import React, { FC } from 'react';

type Theme = 'light' | 'dark';

export interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => (
  <div data-theme={theme}>
    {children}
  </div>
);
