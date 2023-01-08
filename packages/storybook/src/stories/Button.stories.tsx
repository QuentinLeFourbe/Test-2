import React from 'react';
import Button, {
  ButtonProps,
} from '../../../client/src/components/Atoms/Button';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  onClick: () => console.log('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  onClick: () => console.log('clicked'),
  mode: 'secondary',
};
