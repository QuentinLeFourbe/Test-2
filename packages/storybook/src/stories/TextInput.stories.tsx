import React from 'react';
import TextInput, {
  TextInputProps,
} from '../../../client/src/components/Atoms/TextInput';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder',
};
