import React from 'react';
import { Stack as MUIStack, StackProps as MUIStackProps } from '@mui/material';

interface StackProps extends MUIStackProps {}

const Stack: React.FC<StackProps> = (props) => {
  return <MUIStack {...props} />;
};

export default Stack;
