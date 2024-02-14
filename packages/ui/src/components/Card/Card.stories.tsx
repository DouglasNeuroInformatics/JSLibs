import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Card } from './Card';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = { component: Card };

export default meta;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Example</Card.Title>
          <Card.Description>This is an example</Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatibus incidunt id. Minus cupiditate
            eveniet at quam provident saepe repellat maxime natus! Similique provident quia, praesentium reiciendis
            fugiat magnam dolorum?
          </p>
        </Card.Content>
        <Card.Footer className="flex justify-between">
          <Button>Option A</Button>
          <Button variant="outline">Option B</Button>
        </Card.Footer>
      </>
    ),
    className: 'max-w-xl'
  }
};
