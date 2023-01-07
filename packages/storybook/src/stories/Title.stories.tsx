import React from 'react';
import Title, { TitleProps } from '../../../client/src/components/Atoms/Title';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Title',
};
