import { FC } from 'react';
import {
  Button,
  Heading,
  Flex,
  FlexProps,
  Avatar,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Profile } from 'lib/base/profiles';
import { typography } from 'theme/typography';

interface Props extends Profile {
  containerStyle?: FlexProps;
}

export const ProfileCard: FC<Props> = ({
  first_name,
  last_name,
  job,
  containerStyle,
}) => {
  const fullName = first_name && last_name ? `${first_name} ${last_name}` : '';

  return (
    <Flex
      align="center"
      justify="space-between"
      borderRadius={10}
      bg="secondaryDark"
      flexDir="column"
      minW={150}
      h={210}
      p={2}
      _hover={{ bg: '#252634' }}
      {...containerStyle}
    >
      <Avatar name={fullName} src="https://bit.ly/dan-abramov" />
      <VStack spacing={0}>
        <Heading {...typography.h4}>{fullName} </Heading>
        <Text {...typography.paragraph}> {job} </Text>
      </VStack>
      <Button variant="outline"> Message </Button>
    </Flex>
  );
};
