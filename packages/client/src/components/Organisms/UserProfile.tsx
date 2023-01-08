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
      <Label>Nom</Label>
      <p>{user.name}</p>
      <Label>Email</Label>
      <p>{user.email}</p>
      <Label>Ville</Label>
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
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
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
