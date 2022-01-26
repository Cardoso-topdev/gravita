import { FC } from 'react';
import { Progress, HStack, Box, Text, WrapItem } from '@chakra-ui/react';
import { Emoji } from './Emoji';
import { colors } from 'theme/colors';
import { sizes } from 'theme/sizes';

interface Props {
   value: number; 
}

export const Stat: FC<Props> = ({ value }) => {
  return (
    <WrapItem w={130} h={55} p={5}>
      <Emoji symbol="😎" label="great" />
      <Box flex="1">
        <Text fontSize="12" fontWeight={700} color={colors.white}>
          {value}%
        </Text>
        <Progress colorScheme={colors.green} value={value} size={sizes.xs} />
      </Box>
    </WrapItem>
  );
};
