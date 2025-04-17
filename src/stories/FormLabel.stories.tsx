import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormLabel from '../ui/FormLabel';

export default {
  title: 'Components/FormLabel',
  component: FormLabel,
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => <FormLabel {...args}>FormLabel Content</FormLabel>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 