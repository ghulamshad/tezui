import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItemText from '../ui/ListItemText';

export default {
  title: 'Components/ListItemText',
  component: ListItemText,
} as ComponentMeta<typeof ListItemText>;

const Template: ComponentStory<typeof ListItemText> = (args) => <ListItemText {...args}>ListItemText Content</ListItemText>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 