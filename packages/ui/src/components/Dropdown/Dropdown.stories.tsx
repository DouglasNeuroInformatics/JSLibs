import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown.js';

type Story = StoryObj<typeof Dropdown>;

export default { component: Dropdown } satisfies Meta<typeof Dropdown>;

export const Default: Story = {
  args: {
    title: 'Dropdown',
    options: ['Option 1', 'Option 2']
  }
};