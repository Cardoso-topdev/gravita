import { FC } from 'react';
import { NewsQuery } from 'generated/graphql';
import { Heading, Text, Box } from '@chakra-ui/react';

interface Props {
  data: NewsQuery;
}

export const News: FC<Props> = ({ data }) => {
  return (
    <>
      {data.newsCollection.items.map((news) => {
        return (
          <Box key={news.sys.id} mb={5} color="white">
            <Heading fontWeight={700} fontSize={20}>
              {news.title}
            </Heading>
            <Text fontWeight={400} fontSize={12}>
              {news.content}
            </Text>
          </Box>
        );
      })}
    </>
  );
};
