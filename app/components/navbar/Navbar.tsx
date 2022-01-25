import { Box, Button, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { supabase } from 'lib/base';
import { useAuthContext } from 'context/AuthContext';
import { ToggleColorModeButton } from '../ToggleColorModeButton';
import styles from './navbar.module.css';

export const Navbar = (): JSX.Element => {
  const { session } = useAuthContext();

  const handleSignout = () => supabase.auth.signOut();

  return (
    <Box className={styles.container}>
      <Flex
        h={{ base: 'auto', lg: '70px' }}
        p="10px 40px"
        mx={{ base: '0px', lg: '80px' }}
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'flex-start', lg: 'space-between' }}
        style={{ borderBottomColor: '1px solid #E2E8F0' }}
      >
        <Box mt="5px">
          <Link href="/" passHref>
            <Image
              alt="logo"
              display="inline"
              w="35px"
              src="/images/logo.png"
            />
          </Link>
        </Box>
        <Box
          d="flex"
          w="30%"
          justifyContent="space-evenly"
          alignItems={{ base: 'flex-start', lg: 'center' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          {session ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Button onClick={handleSignout}> Logout </Button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </>
          )}
          <ToggleColorModeButton />
        </Box>
      </Flex>
    </Box>
  );
};
