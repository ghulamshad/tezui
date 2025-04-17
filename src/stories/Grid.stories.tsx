import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from '../ui/Grid';

export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args}>Grid Content</Grid>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 