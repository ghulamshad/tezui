import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../ui/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  color: 'primary',
  variant: 'contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  color: 'secondary',
  variant: 'outlined',
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Loading Button',
  color: 'primary',
  variant: 'contained',
  loading: true,
}; 