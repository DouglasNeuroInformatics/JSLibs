import React, { type ForwardedRef } from 'react';

import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  disabled?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  label: string;
  size?: 'lg' | 'md' | 'sm';
  variant?: 'danger' | 'primary' | 'secondary';
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>;

export const Button = React.forwardRef(function Button(
  { className, disabled, icon, iconPosition = 'left', label, size = 'md', variant = 'primary', ...props }: ButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-md font-medium shadow focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'text-md px-6 py-2',
        size === 'lg' && 'px-8 py-3 text-lg',
        variant === 'primary' && 'bg-slate-800 text-slate-100 hover:bg-slate-700 dark:bg-sky-700 dark:hover:bg-sky-600',
        variant === 'secondary' &&
          'border border-slate-300 dark:border-slate-600 hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150 bg-inherit',
        variant === 'danger' && 'bg-red-600 text-white hover:bg-opacity-90',
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {iconPosition === 'left' && icon && <div className="mr-2">{icon}</div>}
      {label}
      {iconPosition === 'right' && icon && <div className="ml-2">{icon}</div>}
    </button>
  );
});
