import { ChevronDownIcon } from '@heroicons/react/24/solid';

import type { ButtonProps } from '../../components/Button';

const ICON_SIZE = {
  lg: 18,
  md: 16,
  sm: 14
};

export type DropdownIconProps = {
  className?: string;
  size?: ButtonProps['size'];
};

export const DropdownIcon = ({ className, size }: DropdownIconProps) => {
  size = size ?? 'md';
  return <ChevronDownIcon className={className} height={ICON_SIZE[size]} width={ICON_SIZE[size]} />;
};
