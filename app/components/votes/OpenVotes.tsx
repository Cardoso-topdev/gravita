import { FC } from 'react';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useVotesQuery } from 'generated/graphql';

export const OpenVotes: FC = () => {
  const [result] = useVotesQuery({
    requestPolicy: 'cache-and-network',
    variables: { where: { status: 'open' }, limit: 3 },
  });

  const { fetching, data } = result;

  if (fetching) {
    return <Text>...Loading</Text>;
  }

  return (
    <>
      {data.votesCollection.items.map((vote) => (
        <Box key={vote.sys.id}>
          <Heading color="primaryGray" fontWeight={700} fontSize={12}>
            OPEN FOR VOTING
          </Heading>
          <Link href={`/votes/${vote.sys.id}`} passHref>
            <Text color="teal" cursor="pointer">
              {' '}
              {vote.title}{' '}
            </Text>
          </Link>
        </Box>
      ))}
    </>
  );
};
