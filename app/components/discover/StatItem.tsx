import { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import styles from './styles.module.css';

interface Props {
  statType: string;
  statValue: string;
}

export const StatItem: FC<Props> = ({statType, statValue}) => {
  return (
    <Box className={styles.statItemContainer}>
      <Heading as={'h2'} fontSize={27}>{statValue}</Heading>
      <Text fontSize={14} color="primaryGray">{statType}</Text>
    </Box>
  );
};
