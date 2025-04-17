import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toolbar from '../ui/Toolbar';
import Typography from '../ui/Typography';
import Button from '../ui/Button';

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => (
  <Toolbar {...args}>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Toolbar Title
    </Typography>
    <Button text="Button 1" />
    <Button text="Button 2" />
  </Toolbar>
);

export const Default = Template.bind({});
Default.args = {}; 