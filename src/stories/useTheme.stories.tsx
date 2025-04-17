// src/stories/useTheme.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useTheme from '../ui/useTheme'; // Correct import for default export
import Typography from '../ui/Typography';

export default {
  title: 'Components/UseTheme',
  component: useTheme,
} as ComponentMeta<typeof useTheme>;

const Template: ComponentStory<typeof useTheme> = (args) => {
  const theme = useTheme();
  return <Typography {...args}>Current Theme: {JSON.stringify(theme)}</Typography>;
};

export const Default = Template.bind({});
Default.args = {
  // Add default args here
};
