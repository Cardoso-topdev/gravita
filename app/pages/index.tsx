import Head from 'next/head';
import { gql } from 'urql';
import GqlClient from '../lib/contentful/gqlService';
import Layout, { title } from '../components/layout/Layout';

export default function Home({ items }) {
  const { welcomeText } = items;

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
        <h1 style={{ textAlign: 'center'}}>{welcomeText} </h1>
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
