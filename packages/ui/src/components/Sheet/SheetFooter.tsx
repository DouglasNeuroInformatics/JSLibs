import { cn } from '@/utils';

export const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...props} />
);
