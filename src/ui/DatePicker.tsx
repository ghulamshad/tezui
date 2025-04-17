import React from 'react';
import { DatePicker as MUIDatePicker, DatePickerProps as MUIDatePickerProps } from '@mui/lab';
import { TextField } from '@mui/material';

interface DatePickerProps extends Omit<MUIDatePickerProps, 'renderInput'> {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <MUIDatePicker
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
      {...props}
    />
  );
};

export default DatePicker;
