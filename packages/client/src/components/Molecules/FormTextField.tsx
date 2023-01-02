import React from 'react';
import styled from 'styled-components';
import Label from '../Atoms/Label';
import TextInput from '../Atoms/TextInput';

type FormTextFieldProps = {
  label: string;
  register: any;
};

function FormTextField({ label, register }: FormTextFieldProps) {
  console.log(register);
  return (
    <FieldContainer>
      <Label>{label}</Label>
      {/* <input type="text" {...register} /> */}
      <TextInput {...register} />
    </FieldContainer>
  );
}

export default FormTextField;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
