import { GetStaticPropsContext, GetStaticProps } from 'next';
import gqlClient from 'lib/contentful/gqlService';
import { NewsQuery, NewsDocument } from 'generated/graphql';
import { NewsWrapper } from 'components/news/NewsWrapper';
import { WithAuthentication } from 'hoc/WithAuthentication';
import MainLayout from 'components/layout/MainLayout';

const PrivateNewsPage = WithAuthentication(NewsWrapper);

interface Props {
  items: NewsQuery['newsCollection'];
}

export default function NewsPage({ items }: Props) {
  return (
    <MainLayout>
      <PrivateNewsPage news={items} />
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
