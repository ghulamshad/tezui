import React from 'react';
import { AppBar as MUIAppBar, AppBarProps as MUIAppBarProps, Toolbar, Typography } from '@mui/material';

interface AppBarProps extends MUIAppBarProps {
  title: string;
}

const AppBar: React.FC<AppBarProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <MUIAppBar position="static" {...props}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {children}
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
