import React from 'react';
import { Divider as MUIDivider, DividerProps as MUIDividerProps } from '@mui/material';

interface DividerProps extends MUIDividerProps {}

const Divider: React.FC<DividerProps> = (props) => {
  return <MUIDivider {...props} />;
};

export default Divider;
