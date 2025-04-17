import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../ui/Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args}>Avatar Content</Avatar>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 