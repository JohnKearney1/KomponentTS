import React from 'react';
import './button.css';
export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Optional styles that override built-in css */
    style?: React.CSSProperties;
    /** Optional click handler */
    onClick?: () => void;
}
/** Primary UI component for user interaction */
export declare const Button: ({ primary, size, backgroundColor, label, style, ...props }: ButtonProps) => React.JSX.Element;
