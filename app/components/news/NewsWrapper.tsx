import { FC } from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { NewsQuery } from 'generated/graphql';
import { NewsCard } from './NewsCard';
import { typography } from 'theme/typography';
import { SortSelector } from '../SortSelector';

const options = [{ value: 'option1', label: 'Option 1'}]

interface Props {
  news: NewsQuery['newsCollection'];
}

export const NewsWrapper: FC<Props> = ({ news }) => {
  return (
    <Box p={{ base: 5, lg: 10 }}>
      <Flex align="center" justify="space-between" mb={5}>
        <Heading as='h2'>News & Updates</Heading>
        <SortSelector placeholder='Recent' options={options} />
      </Flex>
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
          color="primaryGray"
          {...typography.paragraph}
        >
          SEE MORE
        </Button>
      </Center>
    </Box>
  );
};
