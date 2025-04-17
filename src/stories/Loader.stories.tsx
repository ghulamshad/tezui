import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from '../ui/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    size: {
      control: 'number',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'inherit'],
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 40,
  color: 'primary',
}; 