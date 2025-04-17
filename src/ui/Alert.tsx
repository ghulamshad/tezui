// Alert component - to be implemented
import React from 'react';
import { Alert as MUIAlert, AlertProps as MUIAlertProps } from '@mui/material';

interface AlertProps extends MUIAlertProps {
  severity: 'error' | 'warning' | 'info' | 'success';
  message: string;
}

const Alert: React.FC<AlertProps> = ({
  severity,
  message,
  ...props
}) => {
  return (
    <MUIAlert severity={severity} {...props}>
      {message}
    </MUIAlert>
  );
};

export default Alert;
