import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../ui/Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}>Icon Content</Icon>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 