import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ArrowToggle } from './ArrowToggle';

describe('ArrowToggle', () => {
  it('renders with default props', () => {
    render(<ArrowToggle position="up" rotation={90} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with a custom class', () => {
    render(<ArrowToggle arrowSize={24} className="custom-class" position="down" rotation={90} />);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('toggles rotation on click', () => {
    render(<ArrowToggle position="right" rotation={90} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByTestId('arrow-up-icon')).toHaveStyle('transform: rotate(180deg)');
    fireEvent.click(button);
    expect(screen.getByTestId('arrow-up-icon')).toHaveStyle('transform: rotate(90deg)');
  });

  it('renders content correctly', () => {
    render(<ArrowToggle content={<span>Test</span>} contentPosition="right" position="left" rotation={90} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles custom onClick', () => {
    const handleClick = vi.fn();
    render(<ArrowToggle position="up" rotation={90} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
