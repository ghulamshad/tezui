import React from 'react';
import { Box as MUIBox, BoxProps as MUIBoxProps } from '@mui/material';

interface BoxProps extends MUIBoxProps {}

const Box: React.FC<BoxProps> = (props) => {
  return <MUIBox {...props} />;
};

export default Box;
