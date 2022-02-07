import { FC } from 'react';
import { Box, Heading, Text, HStack } from '@chakra-ui/react';
import { VoteItemFragment } from 'generated/graphql';
import { typography } from 'theme/typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getEndTime } from 'utils/common';

interface Props {
  vote: VoteItemFragment;
  count: number;
}

export const DetailVote: FC<Props> = ({ vote, count }) => {

  return (
    <Box p={50}>
      <Heading {...typography.pageHeading} mb={5}>
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
      <Text>{documentToReactComponents(vote.content.json)}</Text>
    </Box>
  );
};
