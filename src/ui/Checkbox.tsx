import React from 'react';
import { Checkbox as MUICheckbox, CheckboxProps as MUICheckboxProps } from '@mui/material';

interface CheckboxProps extends MUICheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  ...props
}) => {
  return <MUICheckbox checked={checked} onChange={onChange} {...props} />;
};

export default Checkbox;
