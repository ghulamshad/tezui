import React from 'react';
import { Skeleton as MUISkeleton, SkeletonProps as MUISkeletonProps } from '@mui/material';

interface SkeletonProps extends MUISkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: number | string;
  height?: number | string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  ...props
}) => {
  return <MUISkeleton variant={variant} width={width} height={height} {...props} />;
};

export default Skeleton;
