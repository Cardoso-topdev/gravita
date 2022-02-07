import { GetStaticPropsContext, GetStaticProps } from 'next';
import gqlClient from 'lib/contentful/gqlService';
import { NewsQuery, NewsDocument } from 'generated/graphql';
import { NewsWrapper } from 'components/news/NewsWrapper';
import MainLayout from 'components/layout/MainLayout';

interface Props {
  items: NewsQuery['newsCollection'];
}

export default function News({ items }: Props) {
  return (
    <MainLayout>
      <NewsWrapper news={items} />
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps<Props, undefined> = async (
  ctx: GetStaticPropsContext,
) => {
  const { data } = await gqlClient.query<NewsQuery>(NewsDocument).toPromise();

  return {
    props: {
      items: data.newsCollection,
    },
  };
};
