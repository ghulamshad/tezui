import React from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

export const Button: React.FC<ButtonProps> = (props) => {
  return <MUIButton {...props} />;
};
