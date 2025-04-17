import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

interface LoaderProps extends CircularProgressProps {
  size?: number;
  color?: 'primary' | 'secondary' | 'inherit';
}

const Loader: React.FC<LoaderProps> = ({
  size = 40,
  color = 'primary',
  ...props
}) => {
  return <CircularProgress size={size} color={color} {...props} />;
};

export default Loader;
