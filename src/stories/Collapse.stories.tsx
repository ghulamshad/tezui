import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Collapse from '../ui/Collapse';

export default {
  title: 'Components/Collapse',
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => <Collapse {...args}>Collapse Content</Collapse>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 