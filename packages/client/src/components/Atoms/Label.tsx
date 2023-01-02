import React from 'react';
import styled from 'styled-components';

type Props = React.HtmlHTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
};

function Label({ children, ...props }: Props) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.label`
  padding: 8px 16px;
`;
