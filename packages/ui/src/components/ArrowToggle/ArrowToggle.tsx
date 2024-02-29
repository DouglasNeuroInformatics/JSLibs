import React, { useState } from 'react';

import { ControlledArrowToggle, type ControlledArrowToggleProps } from './ControlledArrowToggle';

export type ArrowToggleProps = Omit<ControlledArrowToggleProps, 'isToggled' | 'setIsToggled'>;

export const ArrowToggle = React.forwardRef<HTMLButtonElement, ArrowToggleProps>(function ArrowToggle(props, ref) {
  const [isToggled, setIsToggled] = useState(false);
  return <ControlledArrowToggle isToggled={isToggled} ref={ref} setIsToggled={setIsToggled} {...props} />;
});
