import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from '../ui/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '../ui/Button';

export default {
  title: 'Components/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogContent>Dialog Content</DialogContent>
    <DialogActions>
      <Button onClick={args.onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  onClose: () => {},
}; 