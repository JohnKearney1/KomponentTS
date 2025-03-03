import React from "react";
import './box.css'

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
export const Box = ({
    children,
    row = false,
    centered = false,
    style,
    ...props
}: BoxProps) => {
    return (
        <div
            className={['box', centered ? 'box--centered' : '',
                row ? 'box--row' : 'box--column'].join(' ')}
            style={{ ...style }}
            {...props}
        >
            {children}
        </div>
    );
};