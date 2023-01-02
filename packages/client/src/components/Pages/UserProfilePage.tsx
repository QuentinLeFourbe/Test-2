import React from 'react';
import styled from 'styled-components';
import { User } from '../../types/users';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';
import TextInput from '../Atoms/TextInput';
import UserProfileForm from '../Organisms/UserProfileForm';

type UserProfileProps = {};

function UserProfilePage({}: UserProfileProps) {
  const onSubmitUserProfile = (data: any) => {
    console.log(data);
  };

  const defaultUserValues: User = {
    id: '1',
    name: 'toto-2',
    email: 'toto@mail.com',
    city: 'England',
  };

  return (
    <div>
      <UserProfileForm
        onSubmit={onSubmitUserProfile}
        defaultValues={defaultUserValues}
      />
    </div>
  );
}

export default UserProfilePage;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  background-color: green;
`;
