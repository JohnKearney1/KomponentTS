// TextField.tsx
import React, { useState, ChangeEvent, InputHTMLAttributes } from 'react';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import './TextField.css'


export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Controlled value of the text field */
  value?: string;
  /** Protected Field Control: Is this sensitive info? */
  password?: boolean;
  /** Placeholder text */
  placeholder?: string;
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
  password=false,
  ...props
}) => {
  // Determine if the component is controlled
  const isControlled = value !== undefined;

  // Only maintain internal state if uncontrolled
  const [internalValue, setInternalValue] = useState(defaultValue);
  // State to handle the password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  // Determine the type of the input element based on the password prop and toggle state
  const inputType = password ? (showPassword ? 'text' : 'password') : 'text';

  return (
    <div className="TextFieldWrapper">
      <input
        className={`${password ? 'TextFieldPassword' : 'TextField'}`}
        type={inputType}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
      {password && (
        <button
          type="button"
          className="TogglePasswordButton"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? 
            <EyeNoneIcon /> : <EyeOpenIcon />
          }
        </button>
      )}
    </div>
  );
};

export default TextField;
