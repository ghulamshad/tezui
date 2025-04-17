import React from 'react';
import { ListItemText as MUIListItemText, ListItemTextProps as MUIListItemTextProps } from '@mui/material';

interface ListItemTextProps extends MUIListItemTextProps {}

const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return <MUIListItemText {...props} />;
};

export default ListItemText;
