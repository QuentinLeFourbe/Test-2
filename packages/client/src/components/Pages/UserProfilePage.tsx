import React, { useState } from 'react';
import styled from 'styled-components';
import { useQueryClient, useQuery, useMutation } from 'react-query';
import { User } from '../../types/users';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';
import TextInput from '../Atoms/TextInput';
import Title from '../Atoms/Title';
import UserProfile from '../Organisms/UserProfile';
import UserProfileForm from '../Organisms/UserProfileForm';
import CenteredLayout from '../Templates/CenteredLayout';
import CenteredContent from '../Templates/CenteredLayout';
import { getUserProfile, updateUserProfile } from '../../api/users';
import Error from '../Atoms/Error';

type UserProfileProps = {};

function UserProfilePage({}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: userData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery('user', getUserProfile);

  const mutation = useMutation(updateUserProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  const onEditProfile = () => {
    setIsEditing(true);
  };

  const onSubmitUserProfile = (userData: User) => {
    mutation.mutate(userData);
    setIsEditing(false);
  };

  return (
    <CenteredLayout>
      <Title>Mon profil</Title>
      {isSuccess &&
        (isEditing ? (
          <UserProfileForm
            onSubmit={onSubmitUserProfile}
            defaultValues={userData}
          />
        ) : (
          <UserProfile user={userData} onEdit={() => onEditProfile()} />
        ))}
      {isLoading && <p>Loading...</p>}
      {isError && (
        <Error>Une erreur est survenue: {(error as Error).message}</Error>
      )}
    </CenteredLayout>
  );
}

export default UserProfilePage;
