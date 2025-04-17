import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../ui/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '../ui/Typography';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <CardContent>
      <Typography variant="h5" component="div">
        Card Content
      </Typography>
    </CardContent>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 