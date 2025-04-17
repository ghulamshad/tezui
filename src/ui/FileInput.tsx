import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface FileInputProps extends Omit<TextFieldProps, 'type'> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  onChange,
  ...props
}) => {
  return <TextField type="file" onChange={onChange} {...props} />;
};

export default FileInput;
