import { FC } from 'react';
import styles from './dash.module.css';
import { Box, Image, Text } from '@chakra-ui/react';

interface Props {
}

export const NewShortcutCard: FC<Props> = (): JSX.Element => {
  return (
    <Box
      className={styles.newShortcutCardContainer}
      my={3}
      mx={3}
      borderColor="primaryGray"
    >
      <Box
        className={styles.newShortcutCardLogoWrapper}
      >
        <Image
          src="/images/new-shortcut.png"
          className={styles.shortcutCardLogo}
          alt="New Shortcut"
        />
      </Box>
      <Text className={styles.newShotcutDesc} color="primaryGray" px={3}>Drag & drop to add new shortcut</Text>
    </Box>
  );
};
     