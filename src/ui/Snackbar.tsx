import React from 'react';
import { Snackbar as MUISnackbar, SnackbarProps as MUISnackbarProps } from '@mui/material';

interface SnackbarProps extends MUISnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  onClose,
  ...props
}) => {
  return (
    <MUISnackbar
      open={open}
      message={message}
      onClose={onClose}
      {...props}
    />
  );
};

export default Snackbar;
