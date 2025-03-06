import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../components/input/Button';

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    // Default size should be "small"
    expect(buttonElement).toHaveClass('button--small');
    // Also should have the primary mode
    expect(buttonElement).toHaveClass('button--primary');
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
});
