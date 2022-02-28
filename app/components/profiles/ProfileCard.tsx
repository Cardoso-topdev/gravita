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
import { useRouter } from 'next/router';
import { Profile } from 'lib/base/profiles';
import { typography } from 'theme/typography';

interface Props extends Profile {
  containerStyle?: FlexProps;
}

export const ProfileCard: FC<Props> = ({
  id,
  first_name,
  last_name,
  job,
  image_url,
  containerStyle,
}) => {
  const router = useRouter();

  const fullName =
    first_name && last_name ? `${first_name} ${last_name}` : 'Update coming';

  const handleRedirect = (): void => {
    router.push(`/collaborate/${id}`);
  };

  return (
    <Flex
      align='center'
      justify='space-between'
      borderRadius={10}
      bg='secondaryDark'
      flexDir='column'
      minW={150}
      h={210}
      p={2}
      onClick={handleRedirect}
      _hover={{ bg: '#252634' }}
      cursor='pointer'
      {...containerStyle}
    >
      <Avatar name={fullName} src={image_url} />
      <VStack spacing={0}>
        <Heading {...typography.h4}>{fullName} </Heading>
        <Text {...typography.paragraph}> {job} </Text>
      </VStack>
      <Button variant='outline'> Message </Button>
    </Flex>
  );
};
