import React from 'react';
import DateSelector, {
  DateSelectorProps,
} from '../../../client/src/components/Atoms/DateSelector';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'DateSelector',
  component: DateSelector,
} as Meta;

const Template: Story<DateSelectorProps> = (args) => <DateSelector {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
