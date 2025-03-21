import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ size, children, style, ...props }: import("../components/input/Button").ButtonProps) => import("react").JSX.Element;
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
export declare const Large: Story;
export declare const Medium: Story;
export declare const Small: Story;
