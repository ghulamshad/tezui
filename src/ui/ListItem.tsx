import React from 'react';
import { ListItem as MUIListItem, ListItemProps as MUIListItemProps } from '@mui/material';

interface ListItemProps extends MUIListItemProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  return <MUIListItem {...props} />;
};

export default ListItem;
