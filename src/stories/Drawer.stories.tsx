import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Drawer from '../ui/Drawer';
import Button from '../ui/Button';
import List from '../ui/List';
import ListItem from '../ui/ListItem';
import ListItemText from '../ui/ListItemText';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [open, setOpen] = React.useState(args.open);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <Button text="Open Drawer" onClick={toggleDrawer(true)} />
      <Drawer {...args} open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
}; 