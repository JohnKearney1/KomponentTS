// ThemeProvider.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../components/ThemeProvider';
import { Button } from '../components/Button';
import TextField from '../components/TextField';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Themes/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    children: (
      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#000000',
          color: '#ffffff',
        }}
      >
        <h1>Theme = 'dark'</h1>
        <h5>This theme is designed using darker colors; meant to be paired with pure black interfaces.</h5>
        <Button label="Click me" />
        <br/><br/>
        <TextField placeholder="Placeholder Text" />
      </div>
    ),
  },
};

export const LightTheme: Story = {
  args: {
    theme: 'light',
    children: (
      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
          // backgroundColor: 'var(--secondary-color)',
          backgroundColor: '#ffffff',
          color: '#000000',
        }}
      >
        <h1>Theme = 'light'</h1>
        <h5>This theme is designed using lighter colors; it is meant to be paired with pure white interfaces. </h5>
        <Button label="Click me" />
        <br/><br/>
        <TextField placeholder="Placeholder Text" />
      </div>
    ),
  },
};
