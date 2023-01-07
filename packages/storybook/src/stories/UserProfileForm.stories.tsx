import React from 'react';
import UserProfileForm, {
  UserProfileFormProps,
} from '../../../client/src/components/Organisms/UserProfileForm';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'UserProfileForm',
  component: UserProfileForm,
} as Meta;

const Template: Story<UserProfileFormProps> = (args) => (
  <UserProfileForm {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  defaultValues: {
    id: '1',
    name: 'John Doe',
    email: 'toto@totomail.com',
    city: 'New York',
  },
  onSubmit: (values) => console.log(values),
};
