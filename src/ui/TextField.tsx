import React from 'react';
import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material';

interface TextFieldProps extends MUITextFieldProps {
  label: string;
  helperText?: string;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: 'text' | 'password' | 'textarea';
  required?: boolean;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  helperText,
  error = false,
  onChange,
  value,
  type = 'text',
  required = false,
  disabled = false,
  ...props
}) => {
  return (
    <MUITextField
      label={label}
      helperText={helperText}
      error={error}
      onChange={onChange}
      value={value}
      type={type}
      required={required}
      disabled={disabled}
      fullWidth
      variant="outlined"
      {...props}
    />
  );
};

export default TextField;
