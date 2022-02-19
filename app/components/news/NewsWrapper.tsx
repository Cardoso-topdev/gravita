import { FC } from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Flex,
  Select,
  Text,
} from '@chakra-ui/react';
import { NewsQuery } from 'generated/graphql';
import { NewsCard } from './NewsCard';
import { typography } from 'theme/typography';
import { CenterNavBar } from '../navbar/CenterNavBar';
import { SortSelector } from '../SortSelector';

const options = [{ value: 'option1', label: 'Option 1'}]

interface Props {
  news: NewsQuery['newsCollection'];
}

export const NewsWrapper: FC<Props> = ({ news }) => {
  return (
    <Box className="main-container">
      <CenterNavBar />
      <Box p={{ base: 5, lg: 10 }}>
        <Flex align="center" justify="space-between" mb={5}>
          <Heading {...typography.pageHeading}>Announcements</Heading>
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
    </Box>
  );
};
