import { FC } from 'react';
import {
  Avatar,
  Box,
  Button,
  Heading,
  GridItem,
  Center,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { TProfile } from 'lib/base/profiles';
import { typography } from 'theme/typography';
import { ProfileSkillTags } from './ProfileSkillTags';
import { Connect } from './Connect';

interface Props {
  profile: TProfile;
}

export const DetailProfile: FC<Props> = ({ profile }) => {
  return (
    <SimpleGrid templateColumns='repeat(6, 1fr)' p={{ base: 5, lg: 10 }}>
      <GridItem colSpan={6}>
        <Flex align='center' justify='space-between'>
          <HStack>
            <Avatar
              name={profile?.first_name + profile?.last_name}
              //src={profile} to do get profile image
              size='lg'
              mr={2}
            />
            <VStack align='flex-start'>
              <Heading {...typography.h2}>
                {profile.first_name} {profile.last_name}
              </Heading>
              <Text>San Francisco</Text>
              <ProfileSkillTags skills={profile.skills} />
            </VStack>
          </HStack>

          <Center>
            <Button w={218}> Manage </Button>
          </Center>
        </Flex>
        <Divider mt={5} />
      </GridItem>
      <GridItem colSpan={6}>
        <Flex align='center' justify='space-between' mt={5}>
          <Box>
            <Heading {...typography.h2}> My Story </Heading>
            <Text mt={5}>{profile?.bio}</Text>
          </Box>
          <Connect />
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};
