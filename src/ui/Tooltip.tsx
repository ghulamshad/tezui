import React from 'react';
import { Tooltip as MUITooltip, TooltipProps as MUITooltipProps } from '@mui/material';

interface TooltipProps extends MUITooltipProps {
  title: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <MUITooltip title={title} {...props}>
      {children}
    </MUITooltip>
  );
};

export default Tooltip;
