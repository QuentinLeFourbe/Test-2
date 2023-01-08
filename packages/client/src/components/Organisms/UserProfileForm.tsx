import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { User } from '../../types/users';
import SubmitButton from '../Atoms/SubmitButton';
import FormTextField from '../Molecules/FormTextField';

export type UserProfileFormProps = {
  onSubmit: (data: any) => void;
  defaultValues: User;
};

function UserProfileForm({ onSubmit, defaultValues }: UserProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTextField
        label="Nom"
        register={register('name', { required: true, maxLength: 30 })}
        error={errors.name}
      />
      <FormTextField
        label="Email"
        register={register('email')}
        error={errors.email}
      />
      <FormTextField
        label="Ville"
        register={register('city')}
        error={errors.city}
      />
      <SubmitButton />
    </StyledForm>
  );
}

export default UserProfileForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 8px;
  width: 200px;
`;
