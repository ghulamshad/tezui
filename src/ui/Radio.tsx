import React from 'react';
import { Radio as MUIRadio, RadioProps as MUIRadioProps } from '@mui/material';

interface RadioProps extends MUIRadioProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  ...props
}) => {
  return <MUIRadio checked={checked} onChange={onChange} {...props} />;
};

export default Radio;
