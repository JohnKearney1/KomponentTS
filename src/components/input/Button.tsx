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
export const Button = ({
  size = 'small',
  children,
  style,
  ...props
}: ButtonProps) => {
  const mode = 'button--primary';
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={{ ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
