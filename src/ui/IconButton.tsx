import React from 'react';
import { IconButton as MUIIconButton, IconButtonProps as MUIIconButtonProps } from '@mui/material';

interface IconButtonProps extends MUIIconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  ...props
}) => {
  return (
    <MUIIconButton onClick={onClick} {...props}>
      {icon}
    </MUIIconButton>
  );
};

export default IconButton;
