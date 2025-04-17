import React from 'react';
import { Table as MUITable, TableProps as MUITableProps } from '@mui/material';

interface TableProps extends MUITableProps {}

const Table: React.FC<TableProps> = (props) => {
  return <MUITable {...props} />;
};

export default Table;
