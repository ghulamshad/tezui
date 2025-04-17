import React from 'react';
import { DataGrid as MUIDataGrid, DataGridProps as MUIDataGridProps } from '@mui/x-data-grid';

interface DataGridProps extends MUIDataGridProps {}

const DataGrid: React.FC<DataGridProps> = (props) => {
  return <MUIDataGrid {...props} />;
};

export default DataGrid;
