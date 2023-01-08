import React from 'react';
import Calendar from '../../../client/src/components/Organisms/Calendar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta;

const Template: Story = (args) => <Calendar {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
