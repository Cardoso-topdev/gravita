import { useState } from 'react';
import { useVotesQuery } from 'generated/graphql';
import { objOrEmpty } from 'utils/common';

const Filter = {
  closed: 'closed',
  open: 'open',
} as const;


export const useFilterVotes = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const [result] = useVotesQuery({
    requestPolicy: 'cache-and-network',
    variables: objOrEmpty({ where: { status: filter } }, !!filter),
  });

  return {
    error: result?.error,
    Filter,
    loading: result?.fetching,
    votes: result.data?.votesCollection.items,
    setFilter,
  };
};
