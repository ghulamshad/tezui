import React from 'react';
import { Badge as MUIBadge, BadgeProps as MUIBadgeProps } from '@mui/material';

interface BadgeProps extends MUIBadgeProps {
  badgeContent: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  badgeContent,
  children,
  ...props
}) => {
  return (
    <MUIBadge badgeContent={badgeContent} {...props}>
      {children}
    </MUIBadge>
  );
};

export default Badge;
