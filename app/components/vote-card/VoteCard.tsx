import { FC, useState } from 'react';
import { Button, Divider, Flex, Text, useToast } from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { getVotePercentages, insertVote } from 'lib/base';
import { definitions } from 'lib/types';
import { useAuthContext } from 'context/AuthContext';
import { useData } from 'hooks/useData';
import { Loader } from 'components/Loader';
import { StatWrapper } from './StatWrapper';
import { VoteOptions } from './VoteOptions';

interface Props {
  title: string;
}

export const VoteCard: FC<Props> = ({ title }): JSX.Element => {
  const [view, setView] = useState<boolean>(true);

  const { session } = useAuthContext();

  const [votes, loading] = useData(getVotePercentages);

  const toast = useToast();

  const handleVote = async (
    voteType: definitions['card_votes']['vote_type']
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

  const handleSwitchView = () => {
    setView((prev) => !prev);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex
      flexDir="column"
      justify="space-evenly"
      bg={colors.secondaryDark}
      borderRadius={20}
      h={250}
      w={380}
      p={5}
    >
      <Text fontSize={20} fontWeight={700} color={colors.white}>
        {title}
      </Text>
      {view ? (
        <VoteOptions handleVote={handleVote} spacing={39} />
      ) : (
        <StatWrapper w={380} votes={votes.data} statWidth={79} />
      )}
      <Divider />
      <Button
        fontSize={12}
        variant="link"
        _focus={{ boxShadow: 'none' }}
        onClick={handleSwitchView}
      >
        {view ? 'View all' : 'Go back'}
      </Button>
    </Flex>
  );
};
