import React, { FC } from 'react';
type Theme = 'light' | 'dark';
export interface ThemeProviderProps {
    theme: Theme;
    children: React.ReactNode;
}
export declare const ThemeProvider: FC<ThemeProviderProps>;
export {};
