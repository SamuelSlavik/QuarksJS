import { Button } from '../Button';
import { StoryObj } from '@storybook/react';

const meta = {
    title: 'ui/Button',
    component: Button,
    args: {
        children: 'Some text',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Accent: Story = {
    args: {
        accent: true,
    },
};
