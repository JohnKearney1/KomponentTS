import React from 'react';
import './button.css';
export interface ButtonProps {
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    children?: React.ReactNode;
    /** Optional styles that override built-in css */
    style?: React.CSSProperties;
    /** Optional click handler */
    onClick?: () => void;
}
/** Primary UI component for user interaction */
export declare const Button: ({ size, children, style, ...props }: ButtonProps) => React.JSX.Element;
