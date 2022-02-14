import Link from 'next/link';
import { Box, Image } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import styles from './styles.module.css';

export const LeftNavBar = (): JSX.Element => {
  const { colorMode } = useColorMode();
  
  return (
    <Box
      className={styles.logoContainer}
      px={10}
      py={4}
      borderColor="whiteAlpha.300"
      cursor="pointer"
    >
      <Link href="/dashboard" passHref>
        <Image
          alt="logo"
          src={
            colorMode === 'light'
              ? '/images/logo-light.png'
              : '/images/logo.png'
          }
          className={styles.navLogo}
        />
      </Link>
    </Box>
  );
};
