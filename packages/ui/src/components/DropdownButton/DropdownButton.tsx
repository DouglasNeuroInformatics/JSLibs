import React from 'react';

import { Button, type ButtonProps } from '../Button';
import { DropdownIcon } from './DropdownIcon';

export type DropdownButtonProps = ButtonProps & {
  size?: 'lg' | 'md' | 'sm';
};

export const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>(function DropdownButton(
  { children, size, ...props },
  ref
) {
  return (
    <Button ref={ref} size={size} {...props}>
      {children}
      <DropdownIcon className="ml-2" size={size} />
    </Button>
  );
});
