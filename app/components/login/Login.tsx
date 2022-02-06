import { useState } from 'react';
import { Button, Box, Flex, FormControl, FormLabel, Input, FormErrorMessage, InputRightElement, InputGroup, Text } from '@chakra-ui/react';
import { object, string, SchemaOf } from 'yup';
import { useRouter } from 'next/router';
import { supabase } from 'lib/base';
import { FormInput } from '../FormInput';
import { useFormValidation } from 'hooks/useFormValidation';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import styles from './login.module.css';
import commonStyles from '../../styles/common.module.css';
import Link from 'next/link';

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
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

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
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel mt={5} htmlFor={"password"} color={"white"} fontSize={17}>
              {"Password"}
            </FormLabel>
            <InputGroup>
              <Input
                id="password1"
                name="password"
                type={showPassword ? 'text' : 'password'}
                variant="flushed"
                color="white"
                onChange={handleChange}
              />
              <InputRightElement width="3rem">
                {showPassword ? <ViewIcon onClick={handlePasswordVisibility}/> : <ViewOffIcon onClick={handlePasswordVisibility} />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage> {errors.password} </FormErrorMessage>
          </FormControl>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="red"
            mt="10px"
          >
            {serverError}
          </Box>
          <Link href="/forgot-password" passHref>
            <Text
              className={styles.forgotPwd + ' ' + commonStyles.fontSize12}
              color="teal"
            >
              Forgot password</Text>
          </Link>
          <Button
            type="submit"
            disabled={disabled}
            className={styles.btnStartExploring + ' ' + commonStyles.fontSize12}
            background="teal"
            color="gray.800"
          >
            Start Exploring
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
