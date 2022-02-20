import { FC } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import styles from './styles.module.css';

export const HeroSection: FC = () => {
  return (
    <Box className={styles.heroSectionContainer}>
      <Box className={styles.heroSection}>
        <Text
          color="primaryGray"
          className={styles.whatIsGravita}
        >
          What is Gravita
        </Text>
        <Heading
          as="h1"
          mb={5}
          mt={2}
        >
          A diverse community of kind and curious minds who want to build a brighter future.
        </Heading>
        <Text mb={5}>Gravita is a community-owned and powered organization.</Text>
        <Button
          className={styles.btnInviteMembers}
          bg="teal"
          h={37}
          w={164}
        >
          Invite Members
        </Button>
      </Box>
    </Box>
  );
};
