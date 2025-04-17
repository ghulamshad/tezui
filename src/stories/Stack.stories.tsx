import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '../ui/Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args}>Stack Content</Stack>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 