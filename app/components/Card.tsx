import { FC } from 'react';
import { Box, Flex, Icon, Text, VStack, useToast } from '@chakra-ui/react';
import { BsFillSuitDiamondFill, BsHandThumbsUp } from 'react-icons/bs';
import { colors } from 'theme/colors';
import { IconButton } from './IconButton';
import { getVotePercentages, insertVote } from 'lib/base';
import { useAuthContext } from 'context/AuthContext';
import { Stat } from './Stat';
import { useData } from 'hooks/useData';

interface Props {
  title: string;
}

export const Card: FC<Props> = ({ title }) => {
  const { session } = useAuthContext();

  const { data, loading } = useData(getVotePercentages);

  const toast = useToast();

  const handleVote = async (voteType: string): Promise<void> => {
    if (!session) {
      return;
    }

    const { error } = await insertVote(voteType, session.user.id);

    if (error) {
      toast({
        title: 'Oops something went wrong',
        isClosable: true,
        status: 'error',
      });

      return;
    }
    toast({
      title: 'Thank you for your vote',
      isClosable: true,
      status: 'success',
    });
  };

  return (
    <Flex h={330} flexDir="column" align="center" justify="space-evenly">
      <VStack bg={colors.secondaryDark} borderRadius={20} w={325} h={230} p={5}>
        <Text fontSize={20} fontWeight={700} color={colors.white}>
          {title}
        </Text>
        <Stat value={60} />
        <Icon
          as={BsFillSuitDiamondFill}
          color={colors.white}
          style={{ position: 'sticky', marginTop: 132, zIndex: 1 }}
        />
      </VStack>
      <Box bg={colors.secondaryDark} w={200} h={50} borderRadius={90}>
        <IconButton
          icon={BsHandThumbsUp}
          boxSize={30}
          color={colors.teal200}
          onClick={handleVote.bind(null, 'great')}
        />
      </Box>
    </Flex>
  );
};
