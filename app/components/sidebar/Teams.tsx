import { FC } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';
import { colors } from 'theme/colors'; 
import { sizes } from 'theme/sizes';
import styles from './sidebar.module.css';

export const Teams: FC = () => (
  <VStack align="left" spacing={5}>
    <Text className={styles.title}> TEAMS </Text>
    <Text className={styles.text}> Gravita Core</Text>
    <Button
      className={styles.button}
      colorScheme={colors.teal}
      size={sizes.xs}
      variant="link"
    >
      + New Team
    </Button>
  </VStack>
);
