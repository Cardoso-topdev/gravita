import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Divider,
  Flex,
  FlexProps,
  HStack,
  Tag,
  Text,
  useToast,
} from '@chakra-ui/react';
import { insertVote } from 'lib/base/client';
import { definitions } from 'lib/base/types';
import { useAuthContext } from 'context/AuthContext';
import { StatWrapper } from './StatWrapper';
import { VoteOptions } from './VoteOptions';

interface Props extends FlexProps {
  voteId: string;
  title: string;
  status: string;
  createdAt: string;
  defaultView?: number | null;
}

enum Screen {
  vote,
  stats,
  default,
}

export const VoteCard: FC<Props> = ({
  defaultView = null,
  title,
  status,
  voteId,
  ...rest
}): JSX.Element => {
  const [view, setView] = useState<Screen | null>(defaultView);

  const { session } = useAuthContext();

  const toast = useToast();

  const router = useRouter();

  const handleRouteToVoteDetail = (): void => {
    router.push(`/votes/${voteId}`);
  };

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
            <HStack justify='center'>
              <Button
                fontSize={12}
                variant='link'
                onClick={handleView.bind(null)}
                color='red1'
              >
                Cancel
              </Button>
              <Button
                fontSize={12}
                variant='link'
                onClick={handleView.bind(null, 2)}
              >
                Stats
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
              variant='link'
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
            <Button bg='teal' onClick={handleView.bind(null, 1)} w={165}>
              Vote
            </Button>
            <Button
              color='white'
              onClick={handleRouteToVoteDetail}
              variant='outline'
              w={165}
            >
              Details
            </Button>
          </HStack>
        );
    }
  };

  return (
    <Flex
      flexDir='column'
      justify='space-evenly'
      bg='gray.700'
      borderRadius={20}
      h={200}
      w={300}
      p={5}
      position='relative'
      {...rest}
    >
      <Tag
        alignSelf='flex-end'
        borderRadius={40}
        bg={status === 'closed' ? 'gray.500' : 'secondaryGreen'}
        position='absolute'
        top={3}
      >
        {status}
      </Tag>
      <Text color='white' fontSize={20} fontWeight={700} mt={2}>
        {title}
      </Text>
      {renderView(view)}
    </Flex>
  );
};
