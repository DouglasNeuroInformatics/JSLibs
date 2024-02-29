import React, { useMemo } from 'react';

import { ChevronUpIcon } from '@heroicons/react/24/solid';
import type { Simplify } from 'type-fest';

import { Button, type ButtonProps } from '../Button';

const ICON_SIZE = {
  lg: 18,
  md: 16,
  sm: 14
};

export type ControlledArrowToggleProps = Simplify<
  Omit<React.ComponentPropsWithoutRef<'button'>, 'content'> & {
    /** Custom content to insert beside the arrow */
    content?: React.ReactNode;

    /** The position of the custom content, if applicable */
    contentPosition?: 'left' | 'right';

    isToggled: boolean;

    /** The starting position of the arrow (i.e., which direction does it point to) */
    position: 'down' | 'left' | 'right' | 'up';

    /** The clockwise rotation of the arrow when toggled (e.g., if the position is 'right' and rotation is 90, the arrow will point down) */
    rotation: number;

    setIsToggled: (value: boolean) => void;

    /** The size of the icon */
    size?: 'lg' | 'md' | 'sm';

    variant?: Extract<ButtonProps['variant'], 'ghost' | 'outline'>;
  }
>;

export const ControlledArrowToggle = React.forwardRef<HTMLButtonElement, ControlledArrowToggleProps>(
  function ControlledArrowToggle(
    {
      className,
      content,
      contentPosition,
      isToggled,
      onClick,
      position,
      rotation,
      setIsToggled,
      size,
      variant = 'ghost',
      ...props
    },
    ref
  ) {
    const computedRotation = useMemo(() => {
      const toggleRotation = isToggled ? rotation : 0;
      switch (position) {
        case 'up':
          return 0 + toggleRotation;
        case 'right':
          return 90 + toggleRotation;
        case 'down':
          return 180 + toggleRotation;
        case 'left':
          return 270 + toggleRotation;
      }
    }, [position, rotation, isToggled]);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      setIsToggled(!isToggled);
      if (onClick) {
        onClick(event);
      }
    };

    size = size ?? 'md';

    return (
      <Button
        className={className}
        ref={ref}
        size="icon"
        type="button"
        variant={variant}
        onClick={handleClick}
        {...props}
      >
        {content && contentPosition === 'left' && <span className="mr-1">{content}</span>}
        <ChevronUpIcon
          className="transform-gpu transition-transform"
          data-testid="arrow-up-icon"
          height={ICON_SIZE[size]}
          style={{ transform: `rotate(${computedRotation}deg)` }}
          width={ICON_SIZE[size]}
        />
        {content && contentPosition === 'right' && <span className="ml-1">{content}</span>}
      </Button>
    );
  }
);
