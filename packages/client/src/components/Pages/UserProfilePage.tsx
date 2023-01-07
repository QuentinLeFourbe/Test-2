import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '../../types/users';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';
import TextInput from '../Atoms/TextInput';
import Title from '../Atoms/Title';
import UserProfile from '../Organisms/UserProfile';
import UserProfileForm from '../Organisms/UserProfileForm';
import CenteredLayout from '../Templates/CenteredLayout';
import CenteredContent from '../Templates/CenteredLayout';

type UserProfileProps = {};

function UserProfilePage({}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  const defaultUserValues: User = {
    id: '1',
    name: 'toto-2',
    email: 'toto@mail.com',
    city: 'England',
  };

  const onEditProfile = () => {
    setIsEditing(true);
  };

  const onSubmitUserProfile = (data: any) => {
    console.log(data);
    setIsEditing(false);
  };

  return (
    <CenteredLayout>
      <Title>Mon profil</Title>
      {isEditing ? (
        <UserProfileForm
          onSubmit={onSubmitUserProfile}
          defaultValues={defaultUserValues}
        />
      ) : (
        <UserProfile user={defaultUserValues} onEdit={() => onEditProfile()} />
      )}
    </CenteredLayout>
  );
}

export default UserProfilePage;
