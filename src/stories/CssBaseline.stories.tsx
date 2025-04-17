import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CssBaseline from '../ui/CssBaseline';

export default {
  title: 'Components/CssBaseline',
  component: CssBaseline,
} as ComponentMeta<typeof CssBaseline>;

const Template: ComponentStory<typeof CssBaseline> = (args) => <CssBaseline {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 