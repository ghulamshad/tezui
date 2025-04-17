import React from 'react';
import { ListItemIcon as MUIListItemIcon, ListItemIconProps as MUIListItemIconProps } from '@mui/material';

interface ListItemIconProps extends MUIListItemIconProps {}

const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
  return <MUIListItemIcon {...props} />;
};

export default ListItemIcon;
