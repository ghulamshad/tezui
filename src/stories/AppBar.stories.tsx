import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppBar from '../ui/AppBar';
import Toolbar from '../ui/Toolbar';
import Typography from '../ui/Typography';

export default {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {
    title: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => (
  <AppBar {...args}>
    <Toolbar>
      <Typography variant="h6" component="div">
        {args.title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export const Default = Template.bind({});
Default.args = {
  title: 'App Bar Title',
}; 