import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from '../ui/Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 