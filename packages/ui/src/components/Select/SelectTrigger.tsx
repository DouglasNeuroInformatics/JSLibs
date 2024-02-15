import * as React from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(function SelectTrigger({ children, className, ...props }, ref) {
  return (
    <SelectPrimitive.Trigger className={cn('select-trigger', className)} ref={ref} {...props}>
      {children}
    </SelectPrimitive.Trigger>
  );
});
