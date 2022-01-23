import { FC, useState } from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { BsFillSuitDiamondFill } from 'react-icons/bs';

interface Props {
  title: string;
}

export const Card: FC<Props> = ({ title }) => {
  return (
    <Flex flexDirection="column" align="center">
      <Flex
        justify="center"
        p="5"
        w={324}
        h={229}
        bg={colors.secondaryDark}
        borderRadius="20px"
      >
        <Text fontWeight={700} fontSize="lg">
          {title}
        </Text>
        <Icon
          size={50}
          color={colors.secondaryDark}
          as={BsFillSuitDiamondFill}
          style={{ position: 'absolute', bottom: -9, zIndex: -1 }}
        />
      </Flex>
      <Box
        w={200}
        h={50}
        borderRadius={90}
        bg={colors.secondaryDark}
        style={{ position: 'absolute', bottom: -65 }}
      >
        Vote
      </Box>
    </Flex>
  );
};
