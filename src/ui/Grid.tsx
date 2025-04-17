import React from 'react';
import { Grid as MUIGrid, GridProps as MUIGridProps } from '@mui/material';

interface GridProps extends MUIGridProps {}

const Grid: React.FC<GridProps> = (props) => {
  return <MUIGrid {...props} />;
};

export default Grid;
