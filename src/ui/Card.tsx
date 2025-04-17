import React from 'react';
import { Card as MUICard, CardProps as MUICardProps } from '@mui/material';

interface CardProps extends MUICardProps {
  raised?: boolean;
}

const Card: React.FC<CardProps> = ({
  raised = false,
  children,
  ...props
}) => {
  return (
    <MUICard raised={raised} {...props}>
      {children}
    </MUICard>
  );
};

export default Card;
