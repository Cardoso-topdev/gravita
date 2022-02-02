import Head from 'next/head';
import GqlClient from '../lib/contentful/gqlService';
import Layout, { title } from '../components/layout/Layout';
import { Login } from 'components/Login';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { colors } from 'theme/colors';
import { LandingPageDocument, LandingPageQuery } from 'generated/graphql';
import { WithNoAuthentication } from 'hoc/WithNoAuthentication';

const HomePage = ({ items }) => {
  const { welcomeText } = items;
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
      <Heading as="h1" size="2xl" color="white" width="60%">
        {welcomeText}
      </Heading>
      <Login />
      <Flex display="inline-flex">
        <Text mt="250px" fontSize="12px" display="inline-flex" color="white">
          Don&apos;t have an account?{' '}
          <Link href="/signup" passHref>
            <Text color={colors.teal} marginLeft="5px" cursor="pointer">
              Sign up here
            </Text>
          </Link>
        </Text>
      </Flex>
    </Layout>
  );
}

const NoAuthenticatedHome = WithNoAuthentication(HomePage);

export default function Home({ items }) {
  return <NoAuthenticatedHome items={items} />;
}

export const getStaticProps = async () => {
  const { data } = await GqlClient.query<LandingPageQuery>(
    LandingPageDocument,
  ).toPromise();

  const items = data.landingPageCollection.items[0];

  return {
    props: {
      items,
    },
  };
};
