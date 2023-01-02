import React from 'react';
import styled from 'styled-components';

type SubmitButtonProps = React.HtmlHTMLAttributes<HTMLInputElement> & {};

function SubmitButton({ ...props }: SubmitButtonProps) {
  return (
    <StyledSubmitButton
      value="Envoyer"
      {...props}
      type="submit"
    ></StyledSubmitButton>
  );
}

export default SubmitButton;

const StyledSubmitButton = styled.input`
  background-color: green;
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
