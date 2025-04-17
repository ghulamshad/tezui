import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroup from '../ui/RadioGroup';
import Radio from '../ui/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    value: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
    <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
    <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  value: 'option1',
}; 