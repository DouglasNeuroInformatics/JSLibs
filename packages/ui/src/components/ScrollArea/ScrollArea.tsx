import * as React from 'react';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/utils';

import { ScrollBar } from './ScrollBar';

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(function ScrollArea({ children, className, ...props }, ref) {
  return (
    <ScrollAreaPrimitive.Root className={cn('relative overflow-hidden', className)} ref={ref} {...props}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
