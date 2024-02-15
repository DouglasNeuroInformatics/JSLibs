import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const variants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    defaultVariants: {
      side: 'right'
    },
    variants: {
      side: {
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top'
      }
    }
  }
);

type SheetContentProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & VariantProps<typeof variants>;

export const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  function SheetContent({ children, className, side = 'right', ...props }, ref) {
    return (
      <SheetPrimitive.Portal>
        <SheetPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className
          )}
          {...props}
          ref={ref}
        />
        <SheetPrimitive.Content className={cn(variants({ side }), className)} ref={ref} {...props}>
          {children}
          <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPrimitive.Portal>
    );
  }
);
