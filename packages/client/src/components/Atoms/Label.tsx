import React from 'react';
import styled from 'styled-components';

export type LabelProps = React.HtmlHTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
};

function Label({ children, ...props }: LabelProps) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.label`
  font-weight: bold;
`;
