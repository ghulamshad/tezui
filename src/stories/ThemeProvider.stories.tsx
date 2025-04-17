import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../ui/ThemeProvider';
import Typography from '../ui/Typography';

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args}>
    <Typography variant="h1">Themed Heading</Typography>
    <Typography variant="body1">This is some themed body text.</Typography>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {}; 