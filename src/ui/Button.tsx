import React from 'react';
import { Button as MUIButton, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

interface ButtonProps {
  text: string;
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const StyledButton = styled(MUIButton)<ButtonProps>(({ theme, color, variant }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 2),
  ...(variant === 'contained' && {
    backgroundColor: theme.palette[color].main,
    color: theme.palette[color].contrastText,
    '&:hover': {
      backgroundColor: theme.palette[color].dark,
    },
  }),
  ...(variant === 'outlined' && {
    borderColor: theme.palette[color].main,
    color: theme.palette[color].main,
    '&:hover': {
      borderColor: theme.palette[color].dark,
      backgroundColor: theme.palette.action.hover,
    },
  }),
  ...(variant === 'text' && {
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }),
}));

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'default',
  size = 'medium',
  icon,
  variant = 'contained',
  loading = false,
  onClick,
  disabled = false,
}) => {
  return (
    <StyledButton
      color={color}
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      startIcon={icon}
    >
      {loading ? <CircularProgress size={24} /> : text}
    </StyledButton>
  );
};

export default Button;
