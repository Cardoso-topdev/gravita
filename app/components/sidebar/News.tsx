import { FC } from 'react';
import { useNewsQuery } from 'generated/graphql';
import { Heading, Text, Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {}

export const News: FC<Props> = (props) => {
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
          <Box key={news.sys.id} mb={5} color='white' {...props}>
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
