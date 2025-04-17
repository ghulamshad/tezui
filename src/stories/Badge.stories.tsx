import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from '../ui/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}>Badge Content</Badge>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 