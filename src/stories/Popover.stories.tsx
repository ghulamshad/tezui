import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popover from '../ui/Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args}>Popover Content</Popover>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 