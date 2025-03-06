import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../components/input/TextField';


export default {
    title: 'Components/Input/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Password: Story = {
    args: {
        password: true
    },
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Placeholder',
    },
};

export const UnmanagedDefaultValue: Story = {
    args: {
        defaultValue: 'defaultTextValue',
        onChange: () => {
            // Update defaultTextValue
        },
    },
};

export const ManagedDefaultValue: Story = {
    args: {
        value: 'value',
        onChange: () => {
            // Update defaultTextValue
        },
    },
};
