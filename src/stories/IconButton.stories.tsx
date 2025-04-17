import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../ui/IconButton';
import Icon from '../ui/Icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Icon>star</Icon>
  </IconButton>
);

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 