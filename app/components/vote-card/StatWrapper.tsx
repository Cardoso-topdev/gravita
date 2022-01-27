import { FC } from 'react';
import { Wrap, WrapItem, WrapProps } from '@chakra-ui/react';
import { Stat } from './Stat';
import { Emoji } from '../Emoji';
import { VotePercentages } from 'lib/base';
import { EmojiMapper } from 'theme/common';

interface Props extends WrapProps {
  statWidth?: number;
  votes: VotePercentages[];
}

export const StatWrapper: FC<Props> = ({ votes, statWidth, ...rest }): JSX.Element => {
  return (
    <Wrap {...rest}>
      {votes?.map((vote) => (
        <WrapItem key={vote.vote_type}>
          <Emoji symbol={EmojiMapper[vote.vote_type]} label={EmojiMapper[vote.vote_type]} mr={1} />
          <Stat value={vote.percentage} w={statWidth} />
        </WrapItem>
      ))}
    </Wrap>
  );
};
