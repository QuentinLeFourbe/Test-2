import React from 'react';
import styled from 'styled-components';
import { User } from '../../types/users';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';

export type UserProfileProps = {
  user: User;
  onEdit: () => void;
};

function UserProfile({ user, onEdit }: UserProfileProps) {
  return (
    <Container>
      <Label>Name</Label>
      <p>{user.name}</p>
      <Label>Email</Label>
      <p>{user.email}</p>
      <Label>City</Label>
      <p>{user.city}</p>
      <StyledButton onClick={onEdit}>Edit</StyledButton>
    </Container>
  );
}

export default UserProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border: 1px solid black;
  padding: 16px;
  border-radius: 8px;
  width: 200px;
`;

const StyledButton = styled(Button)`
  background-color: darkblue;

  &:hover {
    background-color: teal;
  }
`;
