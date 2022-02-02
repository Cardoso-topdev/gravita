import { FC } from 'react';
import { Box, Button, Heading, Center } from '@chakra-ui/react';
import { NewsQuery } from 'generated/graphql';
import { NewsCard } from './NewsCard';
import { typography } from 'theme/typography';
import { colors } from 'theme/colors';

interface Props {
  news: NewsQuery['newsCollection'];
}

export const NewsWrapper: FC<Props> = ({ news }) => {
  return (
    <Box p={{ base: 10, lg: 20 }}>
      <Heading {...typography.pageHeading} mb={10}>
        News & Updates
      </Heading>
      {news.items.map((item) => (
        <NewsCard
          borderRadius={10}
          content={item.content}
          createdAt={item.createdAt}
          key={item.sys.id}
          m={2}
          p={5}
          title={item.title}
        />
      ))}
      <Center>
        <Button
          variant="outline"
          w="99%"
          color={colors.primaryGray}
          {...typography.titleSM}
        >
          SEE MORE
        </Button>
      </Center>
    </Box>
  );
};
