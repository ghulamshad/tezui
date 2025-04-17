import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from '../ui/ListItem';

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args}>ListItem Content</ListItem>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 