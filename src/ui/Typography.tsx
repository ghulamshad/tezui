import React from 'react';
import { Typography as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material';

interface TypographyProps extends MUITypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'initial',
  ...props
}) => {
  return <MUITypography variant={variant} color={color} {...props} />;
};

export default Typography;
