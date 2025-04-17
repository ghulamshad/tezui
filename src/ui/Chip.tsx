import React from 'react';
import { Chip as MUIChip, ChipProps as MUIChipProps } from '@mui/material';

interface ChipProps extends MUIChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  ...props
}) => {
  return <MUIChip label={label} {...props} />;
};

export default Chip;
