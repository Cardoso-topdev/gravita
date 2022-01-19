import { FC } from 'react';
import { Flex, Box, Spinner } from '@chakra-ui/react';
import { sizes } from 'theme/sizes';
import { colors } from 'theme/colors';

interface Props {
  color?: string;
}

export const Loader: FC<Props> = ({ color = colors.gray400 }) => {
  return (
    <Flex h="500px" flexDir="column" justify="center" align="center">
      <Box>
        <Spinner size={sizes.xl} color={color} />
      </Box>
    </Flex>
  );
};
