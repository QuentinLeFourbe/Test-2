import React from 'react';
import styled from 'styled-components';

export type TitleProps = React.HTMLAttributes<HTMLHeadElement> & {
  children: React.ReactNode;
};

function Title({ children, ...props }: TitleProps) {
  return <StyledTitle {...props}>{children}</StyledTitle>;
}

export default Title;

const StyledTitle = styled.h1``;
