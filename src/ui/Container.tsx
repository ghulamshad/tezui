import React from 'react';
import { Container as MUIContainer, ContainerProps as MUIContainerProps } from '@mui/material';

interface ContainerProps extends MUIContainerProps {}

const Container: React.FC<ContainerProps> = (props) => {
  return <MUIContainer {...props} />;
};

export default Container;
