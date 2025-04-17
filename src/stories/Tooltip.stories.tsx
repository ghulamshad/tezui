import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from '../ui/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args}>Tooltip Content</Tooltip>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 