import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

export const title = 'Gravita app';

export default function Layout({ children, home }) {
  return (
    <Box
      className={styles.container}
      background="url('/images/login-bg.jpg')"
      backgroundSize="cover"
      paddingX={148}
    >
      <Image
        priority
        src="/images/logo.svg"
        height={144}
        width={144}
        alt={title}
      />
      <main>{children}</main>
    </Box>
  );
}
