import React from 'react';

import { cn } from '@/utils/cn';

export const Divide = ({ className, ...props }: React.ComponentPropsWithoutRef<'hr'>) => (
  <hr className={cn('mt-auto h-[1px] border-none bg-muted', className)} {...props} />
);
