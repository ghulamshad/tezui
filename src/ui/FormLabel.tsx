import React from 'react';
import { FormLabel as MUIFormLabel, FormLabelProps as MUIFormLabelProps } from '@mui/material';

interface FormLabelProps extends MUIFormLabelProps {}

const FormLabel: React.FC<FormLabelProps> = (props) => {
  return <MUIFormLabel {...props} />;
};

export default FormLabel;
