import { FC } from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
  symbol: string;
  label: string;
}

export const Emoji: FC<Props> = ({ symbol, label }) => (
  <Text aria-label={label}>{symbol}</Text>
);
