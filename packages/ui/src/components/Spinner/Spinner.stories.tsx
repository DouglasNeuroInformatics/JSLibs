import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

type Story = StoryObj<typeof Spinner>;

const meta: Meta<typeof Spinner> = { component: Spinner };

export default meta;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="flex h-screen justify-center items-center">
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
};
