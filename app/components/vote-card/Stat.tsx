import { FC } from 'react';
import { Progress, Box, Text } from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { sizes } from 'theme/sizes';

interface Props {
  value: number;
  width: number;
}

export const Stat: FC<Props> = ({ value, width }): JSX.Element => {
  return (
    <Box w={width}>
      <Text fontSize={12} fontWeight={700} color={colors.white}>
        {value}%
      </Text>
      <Progress colorScheme={colors.green} value={value} size={sizes.xs} />
    </Box>
  );
};
