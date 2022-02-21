import { FC } from 'react';
import Link from 'next/link';
import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import { VoteCard } from '../votes/VoteCard';
import { useVotesQuery } from 'generated/graphql';
import { News } from './News';
import { Title } from 'components/Title';
import { RightNavBar } from 'components/navbar/RightNavBar';

export const RightSidebar: FC = () => {
  const [result] = useVotesQuery({
    requestPolicy: 'cache-and-network',
    variables: { limit: 1, where: { status: 'open' } },
  });

  const { colorMode } = useColorMode();

  const { fetching, data } = result;

  if (fetching) {
    return <Text>...Loading</Text>;
  }
  const firstVote = data.votesCollection.items[0];

  return (
    <Box
      bg={colorMode === 'light' ? 'gray.300' : 'secondaryDark'}
      w={350}
      h="100vh"
    >
      <RightNavBar />
      <Flex flexDir="column" p={5}>
        <Box>
          <Title title="POLLS & SURVEYS" />
          <VoteCard
            createdAt={firstVote.createdAt}
            status={firstVote.status}
            title={firstVote.title}
            voteId={firstVote.sys.id}
            mt={1}
          />
        </Box>
        <Link href="/votes" passHref>
          <Text color="teal" mt={2} fontSize={14} cursor="pointer">
            See all
          </Text>
        </Link>
        <Box mt={5}>
          <Title title="Announcements" />
          <News mt={1} />
          <Link href="/news" passHref>
            <Text color="teal" mt={2} fontSize={14} cursor="pointer">
              See all news
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
