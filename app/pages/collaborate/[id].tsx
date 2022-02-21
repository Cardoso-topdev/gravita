import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPropsContext,
  GetStaticProps,
} from 'next';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Loader } from 'components/Loader';
import { getAllProfiles } from 'lib/base/profiles';

interface Props {}

export default function DetailedProfilePage({}: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return <Box> I am detailed profile page</Box>;
}

export const getStaticPaths: GetStaticPaths = async (
  ctx: GetStaticPathsContext,
) => {
  const { data } = await getAllProfiles({ limit: 10 });

  const paths = data.map((profile) => ({ params: { id: profile.id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, undefined> = async (
  ctx: GetStaticPropsContext,
) => {
  const profileId = ctx.params.id;
  /* 
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
    }; */
};
