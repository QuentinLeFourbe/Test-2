import React from 'react';
import styled from 'styled-components';

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  mode?: 'primary' | 'secondary';
};

function Button({ children, mode, ...props }: ButtonProps) {
  const renderButton = (props: ButtonProps) => {
    switch (mode) {
      case 'primary':
        return <PrimaryButton {...props} />;
      case 'secondary':
        return <SecondaryButton {...props} />;
      default:
        return <PrimaryButton {...props} />;
    }
  };

  return renderButton({ children, ...props } as ButtonProps);
}

export default Button;

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 12px;
`;

const PrimaryButton = styled(StyledButton)`
  background-color: #3082ff;
  color: #fff;

  &:hover {
    background-color: #5b9cff;
  }

  &:active {
    background-color: #7eb1fe;
  }
`;

const SecondaryButton = styled(StyledButton)`
  background-color: #fff;
  color: #8a9197;
  font-weight: bold;
  //add a slight shadow to the button
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #efefef;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;
