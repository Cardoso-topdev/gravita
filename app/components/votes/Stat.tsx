import { FC } from 'react';
import { Progress, Box, Text } from '@chakra-ui/react';

interface Props {
  value: number;
  width: number;
}

export const Stat: FC<Props> = ({ value, width }): JSX.Element => {
  return (
    <Box w={width}>
      <Text fontSize={12} fontWeight={700} color="white">
        {value}%
      </Text>
      <Progress colorScheme="green" value={value} size="xs" />
    </Box>
  );
};
