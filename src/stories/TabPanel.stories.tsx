import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabPanel from '../ui/TabPanel';

export default {
  title: 'Components/TabPanel',
  component: TabPanel,
  argTypes: {
    value: {
      control: 'number',
    },
    index: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = (args) => (
  <TabPanel {...args}>
    <div style={{ padding: '20px' }}>
      <p>This is the content of the tab panel.</p>
    </div>
  </TabPanel>
);

export const Default = Template.bind({});
Default.args = {
  value: 0,
  index: 0,
}; 