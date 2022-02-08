import { FC } from 'react';
import styles from './dash.module.css';
import { Box, Image } from '@chakra-ui/react';

interface Props {
  title: string;
}

export const ShortcutCard: FC<Props> = ({ title }): JSX.Element => {
  return (
    <Box
      className={styles.shortcutCardContainer}
      _hover={{
        background: "gray.700",
        color: "teal",
      }}
      my={3}
      mx={3}
      backgroundColor="secondaryDark"
    >
      <Box
        className={styles.shortcutCardLogoWrapper}
      >
        <Image
          src="/images/icon.png"
          className={styles.shortcutCardLogo}
          alt={title}
        />
      </Box>
      <Box as="h4" className={styles.shortcutCardTitle}>
        {title}
      </Box>
    </Box>
  );
};
     