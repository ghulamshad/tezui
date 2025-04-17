// Alert component - to be implemented
import React from 'react';
import { Alert as MUIAlert, AlertProps as MUIAlertProps, Snackbar } from '@mui/material';
import { AlertColor } from '@mui/material/Alert/Alert';

// Extend the MUI AlertProps and use AlertColor
export interface TezAlertProps extends Omit<MUIAlertProps, 'severity'> {
  open: boolean;
  onClose: () => void;
  message: string;
  severity?: AlertColor; // Directly use AlertColor for severity
}

export const Alert: React.FC<TezAlertProps> = ({ open, onClose, message, severity = 'success', ...props }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MUIAlert severity={severity} onClose={onClose} {...props}>
        {message}
      </MUIAlert>
    </Snackbar>
  );
};
