import React from 'react';
import { Toolbar as MUIToolbar, ToolbarProps as MUIToolbarProps } from '@mui/material';

interface ToolbarProps extends MUIToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return <MUIToolbar {...props} />;
};

export default Toolbar;
