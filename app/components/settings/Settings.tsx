import { FC } from 'react';
import { Box, Flex, HStack, Heading } from '@chakra-ui/react';
import { AvatarUploader } from '../AvatarUploader';
import { SettingsForm } from './SettingForm';
import { typography } from 'theme/typography';

export const Settings: FC = (): JSX.Element => {
  return (
    <Box p={5}>
      <Heading mb={5} {...typography.heading}>
        Settings
      </Heading>
      <Flex justify='center' mr={10}>
        <HStack spacing={5}>
          <AvatarUploader alignSelf='flex-start' />
          <SettingsForm />
        </HStack>
      </Flex>
    </Box>
  );
};
