import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <StyledHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/profile">Profile</StyledLink>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 32px 16px;
  gap: 16px;
  background-color: #535381;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
