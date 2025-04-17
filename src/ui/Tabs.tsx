import React from 'react';
import { Tabs as MUITabs, TabsProps as MUITabsProps } from '@mui/material';

interface TabsProps extends MUITabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <MUITabs value={value} onChange={onChange} {...props}>
      {children}
    </MUITabs>
  );
};

export default Tabs;
