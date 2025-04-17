import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataGrid from '../ui/DataGrid';

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
  argTypes: {
    rows: {
      control: 'object',
    },
    columns: {
      control: 'object',
    },
  },
} as ComponentMeta<typeof DataGrid>;

const Template: ComponentStory<typeof DataGrid> = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGrid', col2: 'Rocks' },
    { id: 3, col1: 'Material-UI', col2: 'Components' },
  ],
  columns: [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ],
}; 