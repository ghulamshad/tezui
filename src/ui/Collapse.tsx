import React from 'react';
import { Collapse as MUICollapse, CollapseProps as MUICollapseProps } from '@mui/material';

interface CollapseProps extends MUICollapseProps {
  in: boolean;
}

const Collapse: React.FC<CollapseProps> = ({
  in: inProp,
  children,
  ...props
}) => {
  return (
    <MUICollapse in={inProp} {...props}>
      {children}
    </MUICollapse>
  );
};

export default Collapse;
