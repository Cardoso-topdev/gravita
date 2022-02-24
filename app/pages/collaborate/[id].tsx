import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPropsContext,
  GetStaticProps,
} from 'next';
import { useRouter } from 'next/router';
import { Loader } from 'components/Loader';
import { DetailProfile } from 'components/profiles/DetailProfile';
import {
  getAllProfiles,
  getProfileAndSkills,
  TProfile,
} from 'lib/base/profiles';
import MainLayout from 'components/layout/MainLayout';
import { WithAuthentication } from 'hoc/WithAuthentication';

const PrivateDetailProfile = WithAuthentication(DetailProfile);

interface Props {
  profile: TProfile;
}

export default function DetailProfilePage({ profile }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <MainLayout>
      <PrivateDetailProfile profile={profile} />
    </MainLayout>
  );
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
  const profileId = ctx.params.id as string;

  const { profile } = await getProfileAndSkills(profileId);

  return {
    props: {
      profile,
    },
    revalidate: 10,
  };
};
