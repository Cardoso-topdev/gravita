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
import MainLayout from 'components/layout/MainLayout';
import { WithAuthentication } from 'hoc/WithAuthentication';

const PrivateDetailVote = WithAuthentication(DetailVote);

interface Props {
  vote: VoteItemFragment;
}

export default function DetailVotePage({ vote }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <PrivateDetailVote vote={vote} />
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

  return {
    props: {
      vote,
    },
    revalidate: 10,
  };
};
