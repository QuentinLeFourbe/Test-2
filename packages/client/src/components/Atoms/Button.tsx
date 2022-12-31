import React from 'react';
import styled from 'styled-components';

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #666;
  }
`;
