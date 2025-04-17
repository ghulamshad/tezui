import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from '../ui/Table';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args}>Table Content</Table>;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 