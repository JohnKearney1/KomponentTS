import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../components/helper/ThemeProvider';
declare const meta: Meta<typeof ThemeProvider>;
export default meta;
type Story = StoryObj<typeof ThemeProvider>;
export declare const DarkTheme: Story;
export declare const LightTheme: Story;
