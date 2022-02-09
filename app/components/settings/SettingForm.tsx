import { FC } from 'react';
import { Box, Button, HStack, BoxProps } from '@chakra-ui/react';
import { object, string, SchemaOf } from 'yup';
import { FormInput } from '../FormInput';
import { useFormValidation } from 'hooks/useFormValidation';

interface Form {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  bio?: string;
}

const DEFAULT: Form = {
  firstName: '',
  phoneNumber: '',
  lastName: '',
  email: '',
  bio: '',
};

const SCHEMA: SchemaOf<Form> = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required().email(),
  phoneNumber: string().required(),
  bio: string().required(),
});

interface Props extends BoxProps {}

export const SettingsForm: FC<Props> = (props) => {
  const { errors, disabled, handleChange, handleSubmit } = useFormValidation(
    DEFAULT,
    SCHEMA,
  );

  const onSubmit = async (data: Form): Promise<void> => {};

  return (
    <Box p={30} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <FormInput
            autoComplete="off"
            id="firstName"
            error={errors.firstName}
            onChange={handleChange}
            label="First Name"
            name="firstName"
            type="text"
            variant="flushed"
            labelColor="white"
          />
          <FormInput
            autoComplete="off"
            id="lastName"
            error={errors.lastName}
            onChange={handleChange}
            label="Last Name"
            name="lastName"
            type="text"
            variant="flushed"
            labelColor="white"
          />
        </HStack>
        <FormInput
          autoComplete="off"
          id="phoneNumber"
          error={errors.phoneNumber}
          onChange={handleChange}
          label="Phone Number"
          name="phoneNumber"
          type="text"
          variant="flushed"
          labelColor="white"
        />
        <FormInput
          autoComplete="off"
          id="bio"
          error={errors.bio}
          onChange={handleChange}
          label="Profile Details"
          name="bio"
          type="text"
          variant="flushed"
          labelColor="white"
        />

        <Button mt={20} type="submit" color="black" bg="teal">
          Save
        </Button>
      </form>
    </Box>
  );
};
