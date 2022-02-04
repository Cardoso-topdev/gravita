import { FC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { VotesQuery } from 'generated/graphql';
import { VoteCard } from './VoteCard';

interface Props {
  votes: VotesQuery['votesCollection'];
}

export const VotesWrapper: FC<Props> = ({ votes }) => {
  return (
    <Wrap p={50}>
      {votes.items.map((vote) => (
        <WrapItem key={vote.sys.id}>
          <VoteCard
            createdAt={vote.createdAt}
            status={vote.status}
            title={vote.title}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};
