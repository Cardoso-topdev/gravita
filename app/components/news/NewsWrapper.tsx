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
import { CenterNavBar } from 'components/navbar/CenterNavBar';

interface Props {
  news: NewsQuery['newsCollection'];
}

export const NewsWrapper: FC<Props> = ({ news }) => {
  return (
    <Box className="main-container">
      <CenterNavBar />
      <Box p={{ base: 5, lg: 10 }}>
        <Flex align="center" justify="space-between" mb={5}>
          <Heading {...typography.pageHeading}>News & Updates</Heading>
          <HStack>
            <Text fontSize={14}>Sort by:</Text>
            <Select
              fontSize={14}
              fontWeight={700}
              placeholder="Recent"
              variant="unstyled"
              w={100}
            >
              <option value="option1">Recent</option>
            </Select>
          </HStack>
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
          <Button variant="outline" color="primaryGray" {...typography.titleSM}>
            SEE MORE
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
