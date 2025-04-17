import React from 'react';
import { List as MUIList, ListProps as MUIListProps } from '@mui/material';

interface ListProps extends MUIListProps {}

const List: React.FC<ListProps> = (props) => {
  return <MUIList {...props} />;
};

export default List;
