import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { User } from '../../types/users';
import SubmitButton from '../Atoms/SubmitButton';
import FormTextField from '../Molecules/FormTextField';

type UserProfileFormProps = {
  onSubmit: (data: any) => void;
  defaultValues: User;
};

function UserProfileForm({ onSubmit, defaultValues }: UserProfileFormProps) {
  const { register, handleSubmit, watch } = useForm({ defaultValues });

  console.log(defaultValues);

  console.log(watch('name'));
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTextField label="Nom" register={register('name')} />
      <FormTextField label="Email" register={register('email')} />
      <FormTextField label="Ville" register={register('city')} />
      <SubmitButton />
    </StyledForm>
  );
}

export default UserProfileForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
