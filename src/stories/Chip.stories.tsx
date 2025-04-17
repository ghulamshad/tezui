import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chip from '../ui/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args}>Chip Content</Chip>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 