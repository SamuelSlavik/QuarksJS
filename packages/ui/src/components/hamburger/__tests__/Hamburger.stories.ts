import { Hamburger } from '../Hamburger';
import { StoryObj } from '@storybook/react';

const meta = {
    title: 'ui/Hamburger',
    component: Hamburger,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Toggled: Story = {
    args: {
        toggled: true,
    },
};
