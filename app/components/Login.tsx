import { FormEvent, useRef } from 'react';
import {
  Button,
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export const Login = () => {
  const usernameRef = useRef<HTMLInputElement>();

  const passwordRef = useRef<HTMLInputElement>();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const username = usernameRef.current.value;

    const password = passwordRef.current.value;
  };

  return (
    <Flex align="center" justify="center">
      <Box w="50%">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" type="text" ref={usernameRef} />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" ref={passwordRef} />
            <Button mt="10px" type="submit">
              Sign up
            </Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};
