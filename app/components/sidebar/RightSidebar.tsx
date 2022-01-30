import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { VoteCard } from '../vote-card/VoteCard';

export const RightSidebar: FC = () => {
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
      </Box>
    </Flex>
  );
};
