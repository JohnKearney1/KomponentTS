// TextField.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField, { TextFieldProps } from '../components/input/TextField';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Create a dummy icon component to check for rendering (if needed)
jest.mock('@radix-ui/react-icons', () => ({
  EyeOpenIcon: () => <svg data-testid="eye-open" />,
  EyeNoneIcon: () => <svg data-testid="eye-closed" />
}));

describe('TextField Component', () => {
  const placeholderText = 'Enter text here...';

  describe('Uncontrolled behavior', () => {
    it('renders with the default value and updates its value on change', async () => {
      render(<TextField defaultValue="Hello" placeholder={placeholderText} />);
      const input = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;
      
      // Initial value should match the default value
      expect(input.value).toBe('Hello');

      // Simulate user typing new text
      await userEvent.clear(input);
      await userEvent.type(input, 'World');

      expect(input.value).toBe('World');
    });

    it('fires onChange callback on user input', async () => {
      const handleChange = jest.fn();
      render(<TextField defaultValue="" onChange={handleChange} placeholder={placeholderText} />);
      const input = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;
      
      await userEvent.type(input, 'Test');

      // onChange should have been called with each new value
      expect(handleChange).toHaveBeenCalled();
      // Check last call argument
      expect(handleChange).toHaveBeenLastCalledWith('Test');
    });
  });

  describe('Controlled behavior', () => {
    it('renders with the provided value and does not change internal state', async () => {
      const controlledValue = 'Controlled';
      const handleChange = jest.fn();
      render(<TextField value={controlledValue} onChange={handleChange} placeholder={placeholderText} />);
      const input = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;
      
      // Input value must reflect controlled prop
      expect(input.value).toBe(controlledValue);

      // Simulate user input
      await userEvent.type(input, 'Changed');

      // Since controlled, the input value should not change automatically (value stays same)
      expect(input.value).toBe(controlledValue);
      // onChange callback is still fired
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Password Field behavior', () => {
    const passwordPlaceholder = 'Enter password...';

    it('renders as a password field by default when password prop is true', () => {
      render(<TextField password placeholder={passwordPlaceholder} />);
      const input = screen.getByPlaceholderText(passwordPlaceholder) as HTMLInputElement;

      // Initially type should be password
      expect(input.type).toBe('password');

      // The toggle button should be in the document
      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toBeInTheDocument();

      // By default, it should render the "eye open" icon indicating you can click to show password
      expect(screen.getByTestId('eye-open')).toBeInTheDocument();
    });

    it('toggles password visibility when the toggle button is clicked', async () => {
      render(<TextField password placeholder={passwordPlaceholder} />);
      const input = screen.getByPlaceholderText(passwordPlaceholder) as HTMLInputElement;
      const toggleButton = screen.getByRole('button');

      // Initially the input type should be "password"
      expect(input.type).toBe('password');
      expect(screen.getByTestId('eye-open')).toBeInTheDocument();

      // Click toggle to show password
      fireEvent.click(toggleButton);
      // After toggling, input type should change to "text"
      expect(input.type).toBe('text');
      expect(screen.getByTestId('eye-closed')).toBeInTheDocument();

      // Click toggle again to hide password
      fireEvent.click(toggleButton);
      expect(input.type).toBe('password');
      expect(screen.getByTestId('eye-open')).toBeInTheDocument();
    });

    it('calls onChange when text is entered in password field', async () => {
      const handleChange = jest.fn();
      render(<TextField password defaultValue="" onChange={handleChange} placeholder={passwordPlaceholder} />);
      const input = screen.getByPlaceholderText(passwordPlaceholder) as HTMLInputElement;

      await userEvent.type(input, 'Secret123');

      expect(handleChange).toHaveBeenCalled();
      // The final value passed should be "Secret123"
      expect(handleChange).toHaveBeenLastCalledWith('Secret123');
    });
  });

  describe('Styling and accessibility', () => {
    it('applies the correct CSS classes based on props', () => {
      const { container, rerender } = render(
        <TextField placeholder={placeholderText} />
      );
      const input = screen.getByPlaceholderText(placeholderText);

      // For non-password fields, expect the "TextField" class to be applied
      expect(input.className).toContain('TextField');

      // Now render as a password field and check for the "TextFieldPassword" class
      rerender(<TextField password placeholder={placeholderText} />);
      const passwordInput = screen.getByPlaceholderText(placeholderText);
      expect(passwordInput.className).toContain('TextFieldPassword');
    });
  });
});
