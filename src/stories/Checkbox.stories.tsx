import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../ui/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
}; 