import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircularProgress from '../ui/CircularProgress';

export default {
  title: 'Components/CircularProgress',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 