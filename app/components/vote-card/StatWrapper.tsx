import { FC } from 'react';
import { Text, Wrap, WrapItem, WrapProps } from '@chakra-ui/react';
import { Stat } from './Stat';
import { Emoji } from '../Emoji';
import { getVotePercentages } from 'lib/base';
import { useData } from 'hooks/useData';
import { EmojiMapper } from 'theme/common';

interface Props extends WrapProps {
  statWidth?: number;
}

export const StatWrapper: FC<Props> = ({ statWidth, ...rest }): JSX.Element => {
  const [votes, loading] = useData(getVotePercentages);

  if (loading) {
    return (
      <Text color="white" textAlign="center" fontSize={12}>
        ...Loading
      </Text>
    );
  }

  return (
    <Wrap {...rest}>
      {votes?.data?.map((vote) => (
        <WrapItem key={vote.vote_type}>
          <Emoji
            symbol={EmojiMapper[vote.vote_type]}
            label={EmojiMapper[vote.vote_type]}
            mr={1}
          />
          <Stat value={vote.percentage} width={statWidth} />
        </WrapItem>
      ))}
    </Wrap>
  );
};
