import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Snackbar from '../ui/Snackbar';
import Button from '../ui/Button';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    open: {
      control: 'boolean',
    },
    message: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => {
  const [open, setOpen] = React.useState(args.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button text="Show Snackbar" onClick={handleClickOpen} />
      <Snackbar {...args} open={open} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  message: 'This is a snackbar message.',
}; 