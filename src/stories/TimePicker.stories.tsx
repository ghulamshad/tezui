import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimePicker from '../ui/TimePicker';
import { TextField } from '@mui/material';

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => {
  const [value, setValue] = React.useState<Date | null>(args.value);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return <TimePicker {...args} value={value} onChange={handleChange} renderInput={(params) => <TextField {...params} />} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Time',
  value: new Date(),
}; 