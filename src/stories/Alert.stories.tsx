import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../ui/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'info', 'success'],
      },
    },
    message: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}>Alert Content</Alert>;

export const Default = Template.bind({});
Default.args = {
  severity: 'info',
  message: 'This is an alert message.',
}; 