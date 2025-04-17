import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from '../ui/List';

export default {
  title: 'Components/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args}>List Content</List>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 