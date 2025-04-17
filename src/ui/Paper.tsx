import React from 'react';
import { Paper as MUIPaper, PaperProps as MUIPaperProps } from '@mui/material';

interface PaperProps extends MUIPaperProps {}

const Paper: React.FC<PaperProps> = (props) => {
  return <MUIPaper {...props} />;
};

export default Paper;
