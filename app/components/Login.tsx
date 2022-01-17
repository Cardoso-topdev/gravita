import { useState } from 'react';
import { Button, Box, Flex } from '@chakra-ui/react';
import { object, string, SchemaOf } from 'yup';
import { useRouter } from 'next/router';
import { supabase } from 'lib/base';
import { FormInput } from './FormInput';
import { useFormValidation } from 'hooks/useFormValidation';
import { colors } from 'theme/colors';

interface Form {
  email: string;
  password: string;
}

const DEFAULT: Form = {
  email: '',
  password: '',
};

const SCHEMA: SchemaOf<Form> = object({
  email: string().required().email(),
  password: string().min(6),
});

export const Login = (): JSX.Element => {
  const { errors, disabled, handleChange, handleSubmit } = useFormValidation(
    DEFAULT,
    SCHEMA
  );

  const [serverError, setServerError] = useState<string>('');

  const router = useRouter();

  const onSubmit = async (data: Form): Promise<void> => {

    const { user, session, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setServerError(error.message);

      return;
    }
    router.push('/dashboard');
  };

  return (
    <Flex align="center" justify="center">
      <Box w="50%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            autoComplete="off"
            id="email"
            error={errors.email}
            onChange={handleChange}
            label="Email"
            name="email"
            type="email"
          />
          <FormInput
            id="password1"
            error={errors.password}
            onChange={handleChange}
            label="Enter password"
            name="password"
            type="password"
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color={colors.red}
            mt="10px"
          >
            {serverError}
          </Box>
          <Button disabled={disabled} mt="10px" type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};