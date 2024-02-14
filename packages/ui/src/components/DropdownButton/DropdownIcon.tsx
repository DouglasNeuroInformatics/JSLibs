import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { BUTTON_ICON_SIZE } from '../Button';

export type DropdownIconProps = {
  className?: string;
  size?: 'lg' | 'md' | 'sm';
};

export const DropdownIcon = ({ className, size }: DropdownIconProps) => {
  size = size ?? 'md';
  return <ChevronDownIcon className={className} height={BUTTON_ICON_SIZE[size]} width={BUTTON_ICON_SIZE[size]} />;
};
