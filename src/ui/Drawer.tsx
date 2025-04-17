import React from 'react';
import { Drawer as MUIDrawer, DrawerProps as MUIDrawerProps } from '@mui/material';

interface DrawerProps extends MUIDrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  ...props
}) => {
  return (
    <MUIDrawer open={open} onClose={onClose} {...props}>
      {children}
    </MUIDrawer>
  );
};

export default Drawer;
