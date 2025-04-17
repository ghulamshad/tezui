import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Autocomplete from '../ui/Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args}>Autocomplete Content</Autocomplete>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 