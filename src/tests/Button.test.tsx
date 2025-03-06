import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/input/Button';

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByRole, getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    // Default size should be "small"
    expect(buttonElement).toHaveClass('button--small');
    // Should have the primary mode
    expect(buttonElement).toHaveClass('button--primary');
    // Renders the children correctly
    expect(getByText('Click me')).toBeInTheDocument();
    // Has default type attribute
    expect(buttonElement).toHaveAttribute('type', 'button');
  });

  it('applies the correct size class when size prop is provided', () => {
    const { getByRole } = render(<Button size="large">Large Button</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveClass('button--large');
  });

  it('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom inline styles when provided', () => {
    const customStyle = { margin: '10px', backgroundColor: 'red' };
    const { getByRole } = render(
      <Button style={customStyle}>Styled Button</Button>
    );
    const buttonElement = getByRole('button');
    // Check that inline styles are applied via the style attribute
    expect(buttonElement).toHaveStyle('margin: 10px');
    expect(buttonElement).toHaveStyle('background-color: red');
  });

  it('has the proper combination of classes from props and default mode', () => {
    const { getByRole } = render(
      <Button size="medium" style={{ padding: '20px' }}>
        Medium Button
      </Button>
    );
    const buttonElement = getByRole('button');
    // Check for base class, size-specific class, and mode class
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('button--medium');
    expect(buttonElement).toHaveClass('button--primary');
  });
});
