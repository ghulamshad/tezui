import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateTimePicker from '../ui/DateTimePicker';

export default {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
} as ComponentMeta<typeof DateTimePicker>;

const Template: ComponentStory<typeof DateTimePicker> = (args) => <DateTimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 