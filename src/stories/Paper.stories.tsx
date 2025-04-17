import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paper from '../ui/Paper';

export default {
  title: 'Components/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args}>Paper Content</Paper>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 