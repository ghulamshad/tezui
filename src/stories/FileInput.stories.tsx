import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileInput from '../ui/FileInput';

export default {
  title: 'Components/FileInput',
  component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args}>FileInput Content</FileInput>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 