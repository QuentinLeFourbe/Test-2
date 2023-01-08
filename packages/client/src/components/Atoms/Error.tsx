import React from 'react';
import styled from 'styled-components';

export type ErrorProps = {
  children: React.ReactNode;
};

function Error({ children }: ErrorProps) {
  return <Container>{children}</Container>;
}

export default Error;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  color: red;
  border: 1px solid red;
  border-radius: 8px;
  width: 200px;
`;
