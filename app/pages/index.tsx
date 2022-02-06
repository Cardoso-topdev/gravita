import Head from 'next/head';
import GqlClient from '../lib/contentful/gqlService';
import Layout, { title } from '../components/layout/Layout';
import { Login } from 'components/login/Login';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { LandingPageDocument, LandingPageQuery } from 'generated/graphql';
import styles from '../styles/homepage.module.css';

const HomePage = ({ items }) => {
  const { welcomeText } = items;
  return (
    <Layout home>
      <Head>
        <title className={styles.title}>{title}</title>
      </Head>
      <Heading as="h1" size="2xl" color="white" width="60%">
        {welcomeText}
      </Heading>
      <Login />
      <Flex
        className={styles.fatherTiger}
        display="inline-flex"
      >
        <Text fontSize="12px" display="inline-flex" color="white">
          Don&apos;t have an account?{' '}
        </Text>
        <Link href="/signup" passHref>
          <Text fontSize="12px" color="teal" marginLeft="5px" cursor="pointer">
            Sign up here
          </Text>
        </Link>
      </Flex>
    </Layout>
  );
}

export default HomePage

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
