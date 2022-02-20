import { FC } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import styles from './styles.module.css';
import { typography } from 'theme/typography';

const joinCommunities = [
  {
    id: 1,
    imgSrc: '/images/why_join_life_time.png',
    description: 'Lifetime community access with no annual fees'
  },
  {
    id: 2,
    imgSrc: '/images/why_join_vote_on.png',
    description: 'Vote on community decisions and product features'
  },
  {
    id: 3,
    imgSrc: '/images/why_join_co_create.png',
    description: 'Co-create businesses and products and split the revenue'
  },
  {
    id: 4,
    imgSrc: '/images/why_join_work_thing.png',
    description: 'Work on things that make you happy on your schedule'
  },
  {
    id: 5,
    imgSrc: '/images/why_join_earn_gravita.png',
    description: 'Earn Gravita tokens by contributing to the community'
  }
]

export const JoinCommunitySection: FC = () => {
  return (
    <Box className={styles.joinCommunitySectionContainer}>
      <Heading
        as="h2"
        mb={'40px'}
        mt={65}
        textAlign="center"
      >
        Why join the community?
      </Heading>
      <Box className={styles.joinCommunityItemWrapper}>
        {joinCommunities.map(item => (
          <Box key={item.id} className={styles.joinCommunityItem}>
            <Image
              alt="Join Community"
              src={item.imgSrc}
            />
            <Text className={styles.joinCommunityItemText}>{item.description}</Text>
          </Box>
          ))}
      </Box>
    </Box>
  );
};
