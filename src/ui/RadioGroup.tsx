import React from 'react';
import { RadioGroup as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from '@mui/material';

interface RadioGroupProps extends MUIRadioGroupProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <MUIRadioGroup value={value} onChange={onChange} {...props}>
      {children}
    </MUIRadioGroup>
  );
};

export default RadioGroup;
