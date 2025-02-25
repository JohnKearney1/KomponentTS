import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ primary, size, backgroundColor, label, style, ...props }: import("../components/Button").ButtonProps) => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Medium: Story;
export declare const Small: Story;
