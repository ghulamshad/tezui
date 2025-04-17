// FormHelperText component - to be implemented
// src/ui/FormHelperText.tsx

import React from 'react';
import { Typography } from '@mui/material';  // You can use MUI's Typography for consistent styling.

interface FormHelperTextProps {
  children: React.ReactNode;
  error?: boolean;  // Optional prop to display error styling
}

const FormHelperText: React.FC<FormHelperTextProps> = ({ children, error = false }) => {
  return (
    <Typography 
      variant="body2" 
      color={error ? 'error' : 'textSecondary'}  // Adjust color based on the error prop
      style={{ marginTop: 4 }}
    >
      {children}
    </Typography>
  );
};

export default FormHelperText;
