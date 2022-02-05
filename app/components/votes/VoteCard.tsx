import { FC, useState } from 'react';
import {
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Tag,
  Text,
  useToast,
} from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { insertVote } from 'lib/base';
import { definitions } from 'lib/types';
import { useAuthContext } from 'context/AuthContext';
import { StatWrapper } from './StatWrapper';
import { VoteOptions } from './VoteOptions';

interface Props {
  title: string;
  status: string;
  createdAt: string;
}

enum Screen {
  vote,
  stats,
  default,
}

export const VoteCard: FC<Props> = ({ title, status }): JSX.Element => {
  const [view, setView] = useState<Screen>();

  const { session } = useAuthContext();

  const toast = useToast();

  const handleVote = async (
    voteType: definitions['card_votes']['vote_type'],
  ): Promise<void> => {
    if (!session) {
      return;
    }

    const { error } = await insertVote(voteType, session.user.id, title);

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

  const handleView = (view: number): void => {
    setView(view);
  };

  const renderView = (view: Screen): JSX.Element => {
    switch (view) {
      case 1:
        return (
          <>
            <VoteOptions handleVote={handleVote} spacing={39} />
            <Divider />
            <HStack justify="center">
              <Button
                fontSize={12}
                variant="link"
                onClick={handleView.bind(null)}
                color={colors.red1}
              >
                Cancel
              </Button>
              <Button
                fontSize={12}
                variant="link"
                onClick={handleView.bind(null, 2)}
              >
                View all
              </Button>
            </HStack>
          </>
        );
      case 2:
        return (
          <>
            <StatWrapper w={370} statWidth={70} title={title} />
            <Divider />
            <Button
              fontSize={12}
              variant="link"
              _focus={{ boxShadow: 'none' }}
              onClick={handleView.bind(null, 1)}
            >
              Go back
            </Button>
          </>
        );
      default:
        return (
          <Center>
            <Button
              bg={colors.teal}
              onClick={handleView.bind(null, 1)}
              w="90%"
            >
              Vote
            </Button>
          </Center>
        );
    }
  };

  return (
    <Flex
      flexDir="column"
      justify="space-evenly"
      bg={colors.gray700}
      borderRadius={20}
      h={220}
      w={350}
      p={5}
      position="relative"
    >
      <Tag
        alignSelf="flex-end"
        borderRadius={40}
        bg={status === 'closed' ? 'gray.500' : colors.secondaryGreen}
        position="absolute"
        top={3}
      >
        {status}
      </Tag>
      <Text fontSize={20} fontWeight={700} color={colors.white}>
        {title}
      </Text>
      {renderView(view)}
    </Flex>
  );
};
