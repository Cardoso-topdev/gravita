import { useState } from 'react';
import { Button, Box, Flex, useToast } from '@chakra-ui/react';
import { object, string, SchemaOf } from 'yup';
import { useRouter } from 'next/router';
import { supabase } from '../lib/base';
import { FormInput } from './FormInput';
import { useFormValidation } from '../hooks/useFormValidation';

interface FORM_STATE {
  email: string;
  password1: string;
  password2: string;
}

const INITIAL_STATE: FORM_STATE = {
  email: '',
  password1: '',
  password2: '',
};

const SIGNUP_SCHEMA: SchemaOf<FORM_STATE> = object({
  email: string().required().email(),
  password1: string().min(6),
  password2: string().min(6),
});

export const Login = () => {
  const { errors, disabled, handleChange, handleSubmit } = useFormValidation(
    INITIAL_STATE,
    SIGNUP_SCHEMA
  );

  const [serverErrors, setServerErrors] = useState<string>('');

  const toast = useToast();

  const router = useRouter();

  const onSubmit = async (data: FORM_STATE): Promise<void> => {
    if (data.password1 !== data.password2) {
      toast({ title: 'Ensure your passwords match' });

      return;
    }

    const { user, session, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password1,
    });

    console.log(error)

    if (!error) {
      router.push('/dashboard');
    }
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
            label="Reenter password"
            name="password2"
            type="password"
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="red"
            mt="10px"
          >
            Error
          </Box>
          <Button disabled={disabled} mt="10px" type="submit">
            Sign up
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
