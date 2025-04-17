import React from 'react';
import { Switch as MUISwitch, SwitchProps as MUISwitchProps } from '@mui/material';

interface SwitchProps extends MUISwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  ...props
}) => {
  return <MUISwitch checked={checked} onChange={onChange} {...props} />;
};

export default Switch;
