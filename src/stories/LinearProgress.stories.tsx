import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinearProgress from '../ui/LinearProgress';

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress,
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (args) => <LinearProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 