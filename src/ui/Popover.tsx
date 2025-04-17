import React from 'react';
import { Popover as MUIPopover, PopoverProps as MUIPopoverProps } from '@mui/material';

interface PopoverProps extends MUIPopoverProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

const Popover: React.FC<PopoverProps> = ({
  open,
  anchorEl,
  onClose,
  children,
  ...props
}) => {
  return (
    <MUIPopover open={open} anchorEl={anchorEl} onClose={onClose} {...props}>
      {children}
    </MUIPopover>
  );
};

export default Popover;
