import { GetStaticPropsContext, GetStaticProps } from 'next';
import gqlClient from 'lib/contentful/gqlService';
import { VotesDocument, VotesQuery } from 'generated/graphql';
import { VotesWrapper } from 'components/votes/VoteWrapper';

interface Props {
  items: VotesQuery['votesCollection'];
}

export default function Votes({ items }: Props) {
  return <VotesWrapper votes={items} />;
}

export const getStaticProps: GetStaticProps<Props, undefined> = async (
  ctx: GetStaticPropsContext,
) => {
  const { data } = await gqlClient.query<VotesQuery>(VotesDocument).toPromise();

  return {
    props: {
      items: data.votesCollection,
    },
  };
};
