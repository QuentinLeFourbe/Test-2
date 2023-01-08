import React from 'react';
import styled from 'styled-components';
import Label from '../Atoms/Label';
import TextInput from '../Atoms/TextInput';

type FormTextFieldProps = {
  label: string;
  register: any;
  error: any;
};

function FormTextField({ label, register, error }: FormTextFieldProps) {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <TextInput {...register} />
      {error && error.type === 'required' && (
        <ErrorSpan>Champs nécessaire</ErrorSpan>
      )}
      {error && error.type === 'maxLength' && (
        <ErrorSpan>Longueur maximum atteinte</ErrorSpan>
      )}
    </FieldContainer>
  );
}

export default FormTextField;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ErrorSpan = styled.span`
  color: red;
`;
