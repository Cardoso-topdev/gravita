import { FC, useState } from 'react';
import {
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { getVotePercentages, insertVote } from 'lib/base';
import { definitions } from 'lib/types';
import { useAuthContext } from 'context/AuthContext';
import { useData } from 'hooks/useData';
import { StatWrapper } from './StatWrapper';
import { VoteOptions } from './VoteOptions';

interface Props {
  title: string;
}

enum Screen {
  vote,
  stats,
  default,
}

export const VoteCard: FC<Props> = ({ title }): JSX.Element => {
  const [view, setView] = useState<Screen>();

  const { session } = useAuthContext();

  const [votes, loading] = useData(getVotePercentages);

  const toast = useToast();

  const handleVote = async (
    voteType: definitions['card_votes']['vote_type'],
  ): Promise<void> => {
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

  const handleView = (view: number): void => {
    setView(view);
  };

  const renderView = (view?: Screen): JSX.Element => {
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
            <StatWrapper w={380} votes={votes.data} statWidth={79} />
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
          <HStack>
            <Button bg={colors.teal} onClick={handleView.bind(null, 1)} w={165}>
              Vote{' '}
            </Button>
            <Button variant="outline" w={165}>
              Details
            </Button>
          </HStack>
        );
    }
  };

  return (
    <Flex
      flexDir="column"
      justify="space-evenly"
      bg={colors.gray700}
      borderRadius={20}
      h={250}
      w={380}
      p={5}
    >
      <Text fontSize={20} fontWeight={700} color={colors.white}>
        {title}
      </Text>
      {loading ? (
        <Text textAlign="center" color={colors.white}>
          ...Loading
        </Text>
      ) : (
        renderView(view)
      )}
    </Flex>
  );
};
