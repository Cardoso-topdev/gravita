import { useState } from 'react';
import { Button, Box, Flex, useToast } from '@chakra-ui/react';
import { object, string, SchemaOf } from 'yup';
import { useRouter } from 'next/router';
import { supabase } from 'lib/base';
import { FormInput } from './FormInput';
import { useFormValidation } from 'hooks/useFormValidation';
import { colors } from 'theme/colors';

interface Form {
  email: string;
  password1: string;
  password2: string;
}

const DEFAULT: Form = {
  email: '',
  password1: '',
  password2: '',
};

const SCHEMA: SchemaOf<Form> = object({
  email: string().required().email(),
  password1: string().min(6),
  password2: string().min(6),
});

export const Signup = (): JSX.Element => {
  const { errors, disabled, handleChange, handleSubmit } = useFormValidation(
    DEFAULT,
    SCHEMA
  );

  const [serverError, setServerError] = useState<string>('');

  const toast = useToast();

  const router = useRouter();

  const onSubmit = async (data: Form): Promise<void> => {
    if (data.password1 !== data.password2) {
      toast({ title: 'Ensure your passwords match' });

      return;
    }

    const { user, session, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password1,
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
            error={errors.password1}
            onChange={handleChange}
            label="Enter password"
            name="password1"
            type="password"
          />
          <FormInput
            id="password2"
            error={errors.password2}
            onChange={handleChange}
            label="Re-enter password"
            name="password2"
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
            Sign up
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
