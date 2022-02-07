import { FC } from 'react';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import { VoteCard } from '../vote-card/VoteCard';
import { useNewsQuery } from 'generated/graphql';
import { News } from './News';

export const RightSidebar: FC = () => {
  const [result] = useNewsQuery({
    requestPolicy: 'cache-and-network',
    variables: { limit: 3 },
  });

  const { fetching, data } = result;

  if (fetching) {
    return <Text>...Loading</Text>;
  }

  return (
    <Flex flexDir="column" w={450} h="calc(100vh - 66px)" p={10} bg="secondaryDark">
      <Box>
        <Text color="primaryGray" fontWeight={700} fontSize={12}>
          POLLS & SURVEYS
        </Text>
        <VoteCard title="What do you think of Gravita app?" />
      </Box>
      <Text color="teal" mt={2} fontSize={14} cursor="pointer">
        See all
      </Text>
      <Box mt={5}>
        <Text color="primaryGray" fontWeight={700} fontSize={12}>
          NEWS & UPDATES
        </Text>
        <News data={data} />
        <Link href="/news" passHref>
          <Text color="teal" mt={2} fontSize={14} cursor="pointer">
            See all news
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};
