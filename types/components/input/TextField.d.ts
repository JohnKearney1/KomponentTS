import React, { InputHTMLAttributes } from 'react';
import './TextField.css';
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
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
