import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

import { cn } from '@/utils';

import { BUTTON_ICON_SIZE, Button, type ButtonProps } from '../Button';

export type DownloadButtonProps = Omit<ButtonProps, 'children'> & {
  size?: 'lg' | 'md' | 'sm';
};

export const DownloadButton = ({ className, size = 'md', variant = 'outline', ...props }: DownloadButtonProps) => {
  return (
    <Button className={cn('h-8 w-8', className)} size="icon" variant={variant} {...props}>
      <ArrowDownTrayIcon
        className="text-muted-foreground"
        height={BUTTON_ICON_SIZE[size]}
        width={BUTTON_ICON_SIZE[size]}
      />
    </Button>
  );
};
