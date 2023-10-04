import type { Meta, StoryObj } from '@storybook/react';

import { useNotificationsStore } from '../../stores/notifications-store';
import { Button } from '../Button/Button';
import { NotificationHub } from './NotificationHub';

type Story = StoryObj<typeof NotificationHub>;

const meta: Meta<typeof NotificationHub> = {
  component: NotificationHub,
  decorators: [
    (Story) => {
      const notifications = useNotificationsStore();
      return (
        <div className="border">
          <Story />
          <Button
            label="Add Notification"
            type="button"
            onClick={() => {
              notifications.addNotification({
                message: `Notification ${notifications.notifications.length}`,
                type: 'info'
              });
            }}
          />
        </div>
      );
    }
  ]
};

export default meta;

export const Default: Story = {
  args: {
    timeout: 100000
  }
};
