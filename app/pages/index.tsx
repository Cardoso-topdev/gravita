import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { supabase } from '../lib/base';
import { User } from '../lib/types';

export default function Home({ data, error }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        {data.map((user) => (
          <ul key={user.id}>
            <li> First name {user.first_name}</li>
            <li> Last name {user.last_name}</li>
          </ul>
        ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data, error } = await supabase.from<User>('users').select();

  return {
    props: {
      data,
      error,
    },
  };
}
