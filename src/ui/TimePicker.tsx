import React from 'react';
import { TimePicker as MUITimePicker, TimePickerProps as MUITimePickerProps } from '@mui/lab';
import { TextField } from '@mui/material';

interface TimePickerProps extends Omit<MUITimePickerProps, 'renderInput'> {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <MUITimePicker
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
      {...props}
    />
  );
};

export default TimePicker;
