import React from 'react';
import styled from 'styled-components';

type CenteredLayoutProps = {
  children: React.ReactNode;
};

function CenteredLayout({ children }: CenteredLayoutProps) {
  return <Container>{children}</Container>;
}

export default CenteredLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
