import { FC } from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { VoteItemFragment } from 'generated/graphql';
import { typography } from 'theme/typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getEndTime } from 'utils/common';
import { VoteCard } from 'components/votes/VoteCard';
import { OpenVotes } from './OpenVotes';

interface Props {
  vote: VoteItemFragment;
  count: number;
}

export const DetailVote: FC<Props> = ({ vote, count }) => {
  return (
    <Box p={30}>
      <Heading as='h2' mb={5}>
        {vote.title}
      </Heading>
      <HStack mb={5} spacing={5}>
        <HStack>
          <Text>Status:</Text>
          <Text fontWeight={700}>{vote.status} </Text>
        </HStack>
        <HStack>
          <Text>Time remaining:</Text>
          <Text fontWeight={700}> {getEndTime(vote.expiresAt)} </Text>
        </HStack>
        <HStack>
          <Text>Total votes:</Text>
          <Text fontWeight={700}> {count} </Text>
        </HStack>
      </HStack>
      <SimpleGrid minChildWidth="80px" spacing={10}>
        <Box>
          <Text>{documentToReactComponents(vote.content.json)}</Text>
        </Box>
        <VStack spacing={5} align="left">
          <VoteCard
            defaultView={1}
            title={vote.title}
            voteId={vote.sys.id}
            createdAt={vote.createdAt}
            status={vote.status}
          />
          <OpenVotes />
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
