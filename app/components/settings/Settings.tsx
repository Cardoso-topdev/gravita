import { Box, Avatar, Flex, HStack, Heading } from '@chakra-ui/react';
import { SettingsForm } from './SettingForm';
import { typography } from 'theme/typography';
import { ImageUploader } from '../ImageUploader';

export const Settings = (): JSX.Element => {
  return (
    <Box p={5}>
      <Heading mb={5} {...typography.heading}>
        Settings
      </Heading>
      <Flex justify="center" mr={10}>
        <HStack spacing={5}>
          <ImageUploader />
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            alignSelf="flex-start"
            style={{ marginTop: 20 }}
          />
          <SettingsForm />
        </HStack>
      </Flex>
    </Box>
  );
};
