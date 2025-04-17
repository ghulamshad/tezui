import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from '../ui/Container';

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args}>Container Content</Container>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 