import Head from 'next/head';
import Layout, { title } from '../components/layout/Layout';
import { ChatApp } from 'components/chat/ChatApp';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
      <h1> This is landing page </h1>
    </Layout>
  );
}
