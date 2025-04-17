import React from 'react';
import { Select as MUISelect, SelectProps as MUISelectProps } from '@mui/material';

interface SelectProps extends MUISelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <MUISelect value={value} onChange={onChange} {...props}>
      {children}
    </MUISelect>
  );
};

export default Select;
