import React from 'react';
import styled from 'styled-components';

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

function Label({ children, ...props }: Props) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.div`
  padding: 8px 16px;
`;
