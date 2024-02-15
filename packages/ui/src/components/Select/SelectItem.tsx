import * as React from 'react';

import { CheckIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { match } from 'ts-pattern';

import { cn } from '@/utils/cn';

export type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
  /** Override the default icon indicator  */
  isChecked?: boolean;
};

export const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  function SelectItem({ children, className, isChecked, ...props }, ref) {
    return (
      <SelectPrimitive.Item
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
          {match(isChecked)
            .with(undefined, () => (
              <SelectPrimitive.ItemIndicator>
                <CheckIcon className="h-4 w-4" />
              </SelectPrimitive.ItemIndicator>
            ))
            .with(true, () => <CheckIcon className="h-4 w-4" />)
            .otherwise(() => null)}
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);
