import React from 'react';
import UserProfile, {
  UserProfileProps,
} from '../../../client/src/components/Organisms/UserProfile';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'UserProfile',
  component: UserProfile,
} as Meta;

const Template: Story<UserProfileProps> = (args) => <UserProfile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  user: {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@totomail.com',
    city: 'New York',
  },
};
