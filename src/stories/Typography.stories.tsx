import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../ui/Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'Heading 1',
};

export const BodyText = Template.bind({});
BodyText.args = {
  variant: 'body1',
  children: 'This is body text.',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'This is a caption.',
}; 