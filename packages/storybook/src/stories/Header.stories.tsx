import React from 'react';
import Header from '../../../client/src/components/Organisms/Header';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Header {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Header',
};
