// TextField.tsx
import React, { useState, ChangeEvent, InputHTMLAttributes } from 'react';
import './TextField.css'

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Controlled value of the text field */
  value?: string;
  /** Initial value for uncontrolled usage */
  defaultValue?: string;
  /** Callback fired when the text changes 
   * @param {string} newValue - The new value of the text field
  */
  onChange?: (newValue: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  defaultValue = '',
  onChange,
  placeholder,
  ...props
}) => {
  // Determine if the component is controlled
  const isControlled = value !== undefined;

  // Only maintain internal state if uncontrolled
  const [internalValue, setInternalValue] = useState(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <input
      className="TextField"
      type="text"
      value={isControlled ? value : internalValue}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TextField;
