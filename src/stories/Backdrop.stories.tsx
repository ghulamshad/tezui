import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Backdrop from '../ui/Backdrop';

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args}>Backdrop Content</Backdrop>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 