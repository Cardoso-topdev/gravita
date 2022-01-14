import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { ToggleColorModeButton } from './ToggleColorModeButton';

export const Navbar = (): JSX.Element => {
  return (
    <Flex
      h={{ base: 'auto', lg: '100px' }}
      p="10px 40px"
      mx={{ base: '0px', lg: '80px' }}
      direction={{ base: 'column', lg: 'row' }}
      justifyContent={{ base: 'flex-start', lg: 'space-between' }}
    >
      <Box mt='5px'>
        <Link href="/">
          <Image display="inline" w="25px" src='/images/logo.png' />
        </Link>
      </Box>
      <Box
        d="flex"
        w='10%'
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', lg: 'center' }}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Link href="/login">Login</Link>
        <ToggleColorModeButton />
      </Box>
    </Flex>
  );
};
