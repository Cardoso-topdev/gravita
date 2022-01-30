import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { VoteCard } from '../vote-card/VoteCard';
import { useNewsQuery } from 'generated/graphql';
import { News } from './News';

export const RightSidebar: FC = () => {
  const [result] = useNewsQuery({ requestPolicy: 'cache-and-network' });

  const { fetching, data } = result;

  if (fetching) {
    return <Text>...Loading</Text>;
  }

  return (
    <Flex flexDir="column" w={450} h="100vh" p={10}>
      <Box>
        <Text color={colors.primaryGray} fontWeight={700} fontSize={12}>
          POLLS & SURVEYS
        </Text>
        <VoteCard title="What do you think of Gravita app?" />
      </Box>
      <Box mt={5}>
        <Text color={colors.primaryGray} fontWeight={700} fontSize={12}>
          NEWS & UPDATES
        </Text>
        <News data={data} />
      </Box>
    </Flex>
  );
};
