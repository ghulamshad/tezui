import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormHelperText from '../ui/FormHelperText';

export default {
  title: 'Components/FormHelperText',
  component: FormHelperText,
} as ComponentMeta<typeof FormHelperText>;

const Template: ComponentStory<typeof FormHelperText> = (args) => <FormHelperText {...args}>FormHelperText Content</FormHelperText>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 