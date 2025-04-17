import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '../ui/TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'textarea'],
      },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default TextField',
  value: '',
  onChange: () => {},
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password Field',
  type: 'password',
  value: '',
  onChange: () => {},
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'TextField with Helper Text',
  helperText: 'Some important text',
  value: '',
  onChange: () => {},
}; 