// Backdrop component - to be implemented
import React from 'react';
import { Backdrop as MUIBackdrop, BackdropProps as MUIBackdropProps } from '@mui/material';

interface BackdropProps extends MUIBackdropProps {}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return <MUIBackdrop {...props} />;
};

export default Backdrop;