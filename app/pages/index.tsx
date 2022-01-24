import Head from 'next/head';
import { gql } from 'urql';
import GqlClient from '../lib/contentful/gqlService';
import Layout, { title } from '../components/layout/Layout';
import { Card } from 'components/Card';
import { Progress } from '@chakra-ui/react';

export default function Home({ items }) {
  const { welcomeText } = items;

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
        <h1 style={{ textAlign: 'center'}}>{welcomeText} </h1>

      <div style={{ marginTop: 10}}>
        <Card title="What do you think of Gravita?" />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const LandingQuery = gql`
    query {
      landingPageCollection {
        items {
          welcomeText
          submitButtonText
        }
      }
    }
  `;

  const { data } = await GqlClient.query(LandingQuery).toPromise();

  const items = data?.landingPageCollection?.items[0];

  return {
    props: {
      items,
    },
  };
};
