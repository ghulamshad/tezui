import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useMediaQuery from '../ui/useMediaQuery';
import Typography from '../ui/Typography';

export default {
  title: 'Components/useMediaQuery',
  component: useMediaQuery,
} as ComponentMeta<typeof useMediaQuery>;

const Template: ComponentStory<typeof useMediaQuery> = (args) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Typography variant="body1">
      {`The viewport is ${matches ? 'at least' : 'less than'} 600 pixels wide.`}
    </Typography>
  );
};

export const Default = Template.bind({});
Default.args = {}; 