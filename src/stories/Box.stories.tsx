import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Box } from '../components/layout/Box';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Layout/Box',
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    row: true,
    children: (
        <Box row>
            <div style={{backgroundColor: 'gray', color: 'white'}}>Row:</div>
            <div style={{backgroundColor: 'black', color: 'white'}}>
                Row Boxes organize items in a row (left to right)
            </div>
        </Box>
    ),
  },
};

export const Column: Story = {
  args: {
    row: false,
    children: (
        <Box>
            <div style={{backgroundColor: 'gray', color: 'white'}}>Column:</div>
            <div style={{backgroundColor: 'black', color: 'white'}}>
                Column Boxes organize items in a column (top to bottom).
            </div>
        </Box>
    ),
  },
};

export const ColumnCustomized: Story = {
  args: {
    row: false,
    children: (
        <Box centered>
            <div style={{backgroundColor: 'gray', color: 'white'}}>Column:</div>
            <div style={{backgroundColor: 'black', color: 'white'}}>
                Column Boxes organize items in a column (top to bottom). This particular one is centered.
            </div>
        </Box>
    ),
  },
};