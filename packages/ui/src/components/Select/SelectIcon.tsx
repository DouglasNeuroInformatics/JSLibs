import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';

export const SelectIcon = ({ children, className, ...props }: SelectPrimitive.SelectIconProps) => (
  <SelectPrimitive.Icon asChild className={cn('opacity-50', className)} {...props}>
    {children}
  </SelectPrimitive.Icon>
);
