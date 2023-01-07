import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export type TextInputProps = React.HtmlHTMLAttributes<HTMLInputElement> & {};

const TextInput = React.forwardRef<HTMLInputElement>(({ ...props }: TextInputProps, ref )=> {
  return <StyledInput type="text" ref={ref} {...props} />;
});


export default TextInput;

const StyledInput = styled.input`
  background-color: #fff;
  color: #000;
  border: solid 1px lightgray;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #ddd;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;
