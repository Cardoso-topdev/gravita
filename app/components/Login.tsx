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
    SCHEMA,
  );

  const [serverError, setServerError] = useState<string>('');

  const router = useRouter();

  const onSubmit = async (data: Form): Promise<void> => {
    const { error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });

    console.log(error)

    if (error) {
      setServerError(error.message);

      return;
    }
    router.push('/dashboard');
  };

  return (
    <Flex>
      <Box w="50%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            autoComplete="off"
            id="email"
            error={errors.email}
            onChange={handleChange}
            label="Email address"
            name="email"
            type="email"
            variant="flushed"
            labelColor="white"
          />
          <FormInput
            id="password1"
            error={errors.password}
            onChange={handleChange}
            label="Password"
            name="password"
            type="password"
            variant="flushed"
            labelColor="white"
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
          <Button
            disabled={disabled}
            mt="40px"
            type="submit"
            width="239px"
            height="37px"
            fontSize="12px"
            fontWeight="700"
            borderRadius="5px"
            background={colors.teal}
          >
            Start Exploring
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
