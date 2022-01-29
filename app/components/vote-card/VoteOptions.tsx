import { FC } from 'react';
import { HStack, StackProps } from '@chakra-ui/react';
import { EmojiMapper } from 'theme/common';
import { Emoji } from '../Emoji';

interface Props extends StackProps {
  handleVote: (votType: string) => void;
}

export const VoteOptions: FC<Props> = ({
  handleVote,
  ...rest
}): JSX.Element => {
  const renderEmojis = (): JSX.Element[] =>
    Object.entries(EmojiMapper).map(([key, value]) => {
      return (
        <Emoji
          fontSize={25}
          key={key}
          symbol={value}
          label={value}
          onClick={handleVote.bind(null, key)}
          cursor="pointer"
        />
      );
    });

  return (
    <HStack {...rest}>
      {renderEmojis()}
    </HStack>
  );
};
