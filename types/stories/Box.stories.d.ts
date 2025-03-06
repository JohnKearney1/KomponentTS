import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ children, row, centered, style, ...props }: import("../components/layout/Box").BoxProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Row: Story;
export declare const Column: Story;
export declare const ColumnCustomized: Story;
