import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useTheme } from '../ui/useTheme';
import Typography from '../ui/Typography';

export default {
  title: 'Components/useTheme',
  component: useTheme,
} as ComponentMeta<typeof useTheme>;

const Template: ComponentStory<typeof useTheme> = (args) => {
  const theme = useTheme();

  return (
    <Typography variant="body1">
      {`The primary color is ${theme.palette.primary.main}.`}
    </Typography>
  );
};

export const Default = Template.bind({});
Default.args = {}; 