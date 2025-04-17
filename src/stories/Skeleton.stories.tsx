import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skeleton from '../ui/Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args here
}; 