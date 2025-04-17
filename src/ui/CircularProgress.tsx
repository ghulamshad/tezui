import React from 'react';
import { CircularProgress as MUICircularProgress, CircularProgressProps as MUICircularProgressProps } from '@mui/material';

interface CircularProgressProps extends MUICircularProgressProps {
  size?: number;
  color?: 'primary' | 'secondary' | 'inherit';
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 40,
  color = 'primary',
  ...props
}) => {
  return <MUICircularProgress size={size} color={color} {...props} />;
};

export default CircularProgress;
