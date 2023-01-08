//make a story for the TimeSelector component
//
import React from 'react';
import TimeSelector, {
  TimeSelectorProps,
} from '../../../client/src/components/Atoms/TimeSelector';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'TimeSelector',
  component: TimeSelector,
} as Meta;

const Template: Story<TimeSelectorProps> = (args) => <TimeSelector {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  onTimeSelected: (time: Date) => console.log(time),
};
