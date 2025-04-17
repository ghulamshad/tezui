import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../ui/Box';

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>Box Content</Box>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 