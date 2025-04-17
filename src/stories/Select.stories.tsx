import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '../ui/Select';
import MenuItem from '@mui/material/MenuItem';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    value: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <MenuItem value="option1">Option 1</MenuItem>
    <MenuItem value="option2">Option 2</MenuItem>
    <MenuItem value="option3">Option 3</MenuItem>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  value: 'option1',
};

const Template2: ComponentStory<typeof Select> = (args) => <Select {...args}>Select Content</Select>;

export const Default2 = Template2.bind({});
Default2.args = {
  // Add default args here
}; 