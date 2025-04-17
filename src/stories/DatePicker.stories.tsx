import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePicker from '../ui/DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 