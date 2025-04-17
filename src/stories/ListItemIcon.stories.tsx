import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItemIcon from '../ui/ListItemIcon';

export default {
  title: 'Components/ListItemIcon',
  component: ListItemIcon,
} as ComponentMeta<typeof ListItemIcon>;

const Template: ComponentStory<typeof ListItemIcon> = (args) => <ListItemIcon {...args}>ListItemIcon Content</ListItemIcon>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 