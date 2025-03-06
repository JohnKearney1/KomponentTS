import React from "react";
import './box.css';
export interface BoxProps {
    /** Box contents */
    children?: React.ReactNode;
    /** Determines if flexbox is row or column style */
    row?: boolean;
    /** Determines if content is centered */
    centered?: boolean;
    /** Optional click handler */
    onClick?: () => void;
    /** Optional styles that override built-in css */
    style?: React.CSSProperties;
}
/** Primary UI component for user interaction */
export declare const Box: ({ children, row, centered, style, ...props }: BoxProps) => React.JSX.Element;
