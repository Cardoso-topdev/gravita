import { FC } from 'react';
import { Box, HStack, Icon } from '@chakra-ui/react';
import { BsGlobe } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { SiGitlab } from 'react-icons/si';
import { AiOutlineSlack } from 'react-icons/ai';
import { Title } from 'components/Title';

export const Connect: FC = () => {
  return (
    <Box>
      <Title title='CONNECT' />
      <HStack mt={5}>
        <Icon as={BsGlobe} boxSize={5} />
        <Icon as={AiFillGithub} boxSize={5} />
        <Icon as={ImLinkedin2} boxSize={5} />
        <Icon as={SiGitlab} boxSize={5} />
        <Icon as={AiOutlineSlack} boxSize={5} />
      </HStack>
    </Box>
  );
};
