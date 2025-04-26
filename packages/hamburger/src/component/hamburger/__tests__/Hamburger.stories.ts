import { Hamburger } from '../Hamburger';
import { StoryObj } from '@storybook/react';

const meta = {
    title: 'hamburger/Hamburger',
    component: Hamburger,
    args: {
        size: 20,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Toggled: Story = {
    args: {
        toggled: true,
    },
};
