import React from 'react';
import { Dialog as MUIDialog, DialogProps as MUIDialogProps } from '@mui/material';

interface DialogProps extends MUIDialogProps {
  open: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  ...props
}) => {
  return (
    <MUIDialog open={open} onClose={onClose} {...props}>
      {children}
    </MUIDialog>
  );
};

export default Dialog;
