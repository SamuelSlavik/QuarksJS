import { Navigation } from '../Navigation';
import { StoryObj } from '@storybook/react';

const meta = {
    title: 'layout/Navigation',
    component: Navigation,
    args: {
        logo: <div>Logo</div>,
        menu: 'menu',
        content: 'a',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
