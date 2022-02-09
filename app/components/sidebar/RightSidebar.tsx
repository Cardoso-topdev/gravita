import { FC } from 'react';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import { VoteCard } from '../votes/VoteCard';
import { useVotesQuery } from 'generated/graphql';
import { News } from './News';
import { Title } from 'components/Title';

export const RightSidebar: FC = () => {
  const [result] = useVotesQuery({
    requestPolicy: 'cache-and-network',
    variables: { limit: 1, where: { status: 'open' } },
  });

  const { fetching, data } = result;

  if (fetching) {
    return <Text>...Loading</Text>;
  }
  const firstVote = data.votesCollection.items[0];

  return (
    <Flex flexDir="column" w={450} h="calc(100vh - 66px)" p={10} bg="secondaryDark">
      <Box>
        <Title title='POLLS & SURVEYS' />
        <VoteCard
          createdAt={firstVote.createdAt}
          status={firstVote.status}
          title={firstVote.title}
          voteId={firstVote.sys.id}
        />
      </Box>
      <Link href="/votes" passHref>
        <Text color="teal" mt={2} fontSize={14} cursor="pointer">
          See all
        </Text>
      </Link>
      <Box mt={5}>
        <Title title='NEWS & UPDATES' />
        <News />
        <Link href="/news" passHref>
          <Text color="teal" mt={2} fontSize={14} cursor="pointer">
            See all news
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};
