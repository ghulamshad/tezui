import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from '../ui/Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}>Accordion Content</Accordion>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 