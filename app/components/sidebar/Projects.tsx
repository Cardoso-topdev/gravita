import { FC } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';
import { colors } from 'theme/colors'; 
import { sizes } from 'theme/sizes';
import styles from './sidebar.module.css';

export const Projects: FC = () => (
  <VStack align="left" spacing={5}>
    <Text className={styles.title}> FAVORITE PROJECTS </Text>
    <Text className={styles.text}> Gravita Core</Text>
    <Text className={styles.text}> Gravita Identity</Text>
    <Text className={styles.text}> Gravita Operate</Text>

    <Button
      className={styles.button}
      colorScheme={colors.teal}
      size={sizes.xs}
      variant="link"
    >
      + New Project
    </Button>
  </VStack>
);
