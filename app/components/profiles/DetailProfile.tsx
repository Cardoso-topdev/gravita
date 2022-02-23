import { FC } from 'react';
import {
  Avatar,
  Box,
  Heading,
  Divider,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { TProfile } from 'lib/base/profiles';
import { typography } from 'theme/typography';
import { ProfileSkillTags } from './ProfileSkillTags';

interface Props {
  profile: TProfile;
}

export const DetailProfile: FC<Props> = ({ profile }) => {
  return (
    <Box  p={{ base: 5, lg: 10 }}>
      <HStack spacing={5}>
        <Avatar
          name='Dan Abrahmov'
          src='https://bit.ly/dan-abramov'
          alignSelf='flex-start'
          style={{ marginTop: 20 }}
        />
        <VStack align='flex-start'>
          <Heading {...typography.h2}>
            {profile.first_name} {profile.last_name}
          </Heading>
          <Text>San Francisco</Text>
          <ProfileSkillTags skills={profile.skills} />
        </VStack>
      </HStack>
      <Divider mt={10}/>
    </Box>
  );
};
