import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { supabase } from '../lib/base';
import { User } from '../lib/types';

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        {data.map((user) => (
          <div key={user.id}>
            <p> Dev name: {user.firstName} {user.lastName} </p>
          </div>
        ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data, error } = await supabase.from<User>('devs').select();

  return {
    props: {
      data,
      error,
    },
  };
}
