import React from 'react';
import { LinearProgress as MUILinearProgress, LinearProgressProps as MUILinearProgressProps } from '@mui/material';

interface LinearProgressProps extends MUILinearProgressProps {}

const LinearProgress: React.FC<LinearProgressProps> = (props) => {
  return <MUILinearProgress {...props} />;
};

export default LinearProgress;
