import { FC } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import styles from './styles.module.css';

const joinCommunities = [
  {
    title: 'Gravita Core',
    description: 'Lifetime community access with no annual fees'
  },
  {
    title: 'Gravita Identity',
    description: 'Vote on community decisions and product features'
  },
  {
    title: 'Gravita Operate',
    description: 'Co-create businesses and products and split the revenue'
  },
  {
    title: 'Gravita Evolve',
    description: 'Work on things that make you happy on your schedule'
  },
  {
    title: 'Gravita Wealth',
    description: 'Earn Gravita tokens by contributing to the community'
  },
  {
    title: 'Gravita Impact',
    description: 'Help non-profits in new and fun ways. Community source solutions to world problems.'
  }
]

export const VisionSection: FC = () => {
  return (
    <Box className={styles.visionSection}>
      <Image
        alt="Join Community"
        className={styles.visionImg}
        src={'/images/discover_vision.png'}
      />
      <Box className={styles.visionContainer}>
        <Heading
          as="h2"
          fontSize={27}
        >
          Vision
        </Heading>
        <Box className={styles.visionsWrapper}>
          {joinCommunities.map(item => (
            <Box key={item.title} className={styles.visionItem}>
              <Heading as="h4" className={styles.joinCommunityItemText}>{item.title}</Heading>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
