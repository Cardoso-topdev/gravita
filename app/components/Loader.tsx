import { FC } from 'react';
import { Flex, Box, Spinner, Text } from '@chakra-ui/react';

interface Props {
  color?: string;
}

export const Loader: FC<Props> = ({ color = "gray.400" }) => {
  return (
    <Flex h="500px" flexDir="column" justify="center" align="center">
      <Box>
        <Spinner size="xl" color={color} />
      </Box>
    </Flex>
  );
};
