import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPropsContext,
  GetStaticProps,
} from 'next';
import { useRouter } from 'next/router';
import client from 'lib/contentful/gqlService';
import { VotesDocument, VotesQuery, VoteItemFragment } from 'generated/graphql';
import { DetailVote } from 'components/votes/DetailVote';
import { Loader } from 'components/Loader';
import { getVotesCount } from 'lib/base/server';
import MainLayout from 'components/layout/MainLayout';
import { WithAuthentication } from 'hoc/WithAuthentication';

const PrivateDetailVotePage = WithAuthentication(DetailVote);

interface Props {
  vote: VoteItemFragment;
  count: number;
}

export default function DetailVotePage({ vote, count }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <PrivateDetailVotePage vote={vote} count={count} />
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async (
  ctx: GetStaticPathsContext,
) => {
  const { data } = await client.query<VotesQuery>(VotesDocument).toPromise();

  const paths = data.votesCollection.items.map((vote) => ({
    params: { id: vote.sys.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, undefined> = async (
  ctx: GetStaticPropsContext,
) => {
  const sysId = ctx.params.id;

  const { data } = await client
    .query<VotesQuery>(VotesDocument, { where: { sys: { id: sysId } } })
    .toPromise();

  const vote = data.votesCollection.items[0];

  const { count } = await getVotesCount(vote.title);

  return {
    props: {
      vote,
      count,
    },
    revalidate: 10,
  };
};
