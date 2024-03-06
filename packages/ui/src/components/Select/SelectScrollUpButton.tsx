import * as React from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { ChevronUpIcon } from '@/icons';
import { cn } from '@/utils';

export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(function SelectScrollUpButton({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      ref={ref}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
});
