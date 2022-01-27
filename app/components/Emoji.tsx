import { FC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface Props extends TextProps {
  symbol: string;
  label: string;
}

export const Emoji: FC<Props> = ({ symbol, label, ...rest }) => (
  <Text aria-label={label} {...rest}>
    {symbol}
  </Text>
);
