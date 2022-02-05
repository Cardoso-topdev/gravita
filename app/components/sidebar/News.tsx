import { FC } from 'react';
import { useNewsQuery } from 'generated/graphql';
import { Heading, Text, Box } from '@chakra-ui/react';
import { colors } from 'theme/colors';

export const News: FC = () => {
  const [result] = useNewsQuery({
    requestPolicy: 'cache-and-network',
    variables: { limit: 3 },
  });

  const { fetching, data } = result;

  if (fetching) {
    return <Text>...Loading</Text>;
  }
  return (
    <>
      {data.newsCollection.items.map((news) => {
        return (
          <Box key={news.sys.id} mb={5} color={colors.white}>
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
