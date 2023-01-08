//create a story for the Error component

import React from 'react';
import Error, { ErrorProps } from '../../../client/src/components/Atoms/Error';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Error',
  component: Error,
} as Meta;

const Template: Story<ErrorProps> = (args) => <Error {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Error',
};
