import React from 'react';
import { DateTimePicker as MUIDateTimePicker, DateTimePickerProps as MUIDateTimePickerProps } from '@mui/lab';
import { TextField } from '@mui/material';

interface DateTimePickerProps extends Omit<MUIDateTimePickerProps, 'renderInput'> {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <MUIDateTimePicker
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
      {...props}
    />
  );
};

export default DateTimePicker;
