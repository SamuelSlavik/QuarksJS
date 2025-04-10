import { Navigation } from '../Navigation';
import { StoryObj } from '@storybook/react';

const meta = {
    title: 'layout/Navigation',
    component: Navigation,
    args: {
        logo: <div>QuarksJS</div>,
        menu: [
            <a key={1}>Link 1</a>,
            <a key={2}>Link 2</a>,
            <a key={3}>Link 3</a>,
        ],
        content: [
            <a key={1}>Link 1</a>,
            <a key={2}>Link 2</a>,
            <a key={3}>Link 3</a>,
        ],
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
