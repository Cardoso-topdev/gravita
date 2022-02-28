import { FC } from 'react';
import { Box, Heading, Text, HStack, VStack, Tag } from '@chakra-ui/react';
import { VoteItemFragment } from 'generated/graphql';
import { typography } from 'theme/typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getEndTime } from 'utils/common';
import { VoteCard } from 'components/votes/VoteCard';
import { OpenVotes } from './OpenVotes';
import { getVotesCount } from 'lib/base/votes';
import { useData } from 'hooks/useData';

interface Props {
  vote: VoteItemFragment;
}

export const DetailVote: FC<Props> = ({ vote }) => {
  const [votes] = useData(() => getVotesCount(vote.title));

  return (
    <Box p={30} d='flex' flexDirection='row-reverse'>
      <VStack spacing={5} align='left' w={280} ml={10}>
        <VoteCard
          defaultView={1}
          title={vote.title}
          voteId={vote.sys.id}
          createdAt={vote.createdAt}
          status={vote.status}
        />
        <OpenVotes />
      </VStack>
      <VStack spacing={5} align='left' w='full'>
        <Heading {...typography.pageHeading} mb={5}>
          {vote.title}
        </Heading>
        <HStack mb={5} spacing={5}>
          <HStack>
            <Text>Status:</Text>
            <Tag
              alignSelf='flex-end'
              borderRadius={40}
              bg={vote.status === 'closed' ? 'gray.500' : 'secondaryGreen'}
              top={3}
            >
              {vote.status}
            </Tag>
          </HStack>
          <HStack>
            <Text>Time Left:</Text>
            <Text fontWeight={700}> {getEndTime(vote.expiresAt)} </Text>
          </HStack>
          <HStack>
            <Text>Total votes:</Text>
            <Text fontWeight={700}> {votes?.count} </Text>
          </HStack>
        </HStack>
        <Box>
          <Text>{documentToReactComponents(vote.content.json)}</Text>
        </Box>
      </VStack>
    </Box>
  );
};
