import React from 'react';
import { Icon as MUIIcon, IconProps as MUIIconProps } from '@mui/material';

interface IconProps extends MUIIconProps {}

const Icon: React.FC<IconProps> = (props) => {
  return <MUIIcon {...props} />;
};

export default Icon;
