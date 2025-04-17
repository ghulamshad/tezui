import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from '../ui/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../ui/TabPanel';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    value: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [value, setValue] = React.useState(args.value);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Content for Tab 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab 3
      </TabPanel>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
}; 