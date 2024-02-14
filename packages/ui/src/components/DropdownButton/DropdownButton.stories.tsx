import type { Meta, StoryObj } from '@storybook/react';

import { DropdownButton } from './DropdownButton';

type Story = StoryObj<typeof DropdownButton>;

export default { component: DropdownButton } as Meta<typeof DropdownButton>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger'
  }
};
