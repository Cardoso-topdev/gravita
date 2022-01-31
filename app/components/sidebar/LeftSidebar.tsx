import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { SidebarContent } from './SidebarContent';
import { Projects } from './Projects';
import { Teams } from './Teams';
import { colors } from 'theme/colors';

export const LeftSidebar: FC = () => {
  return (
    <Flex
      borderWidth={1}
      borderLeftColor={colors.white}
      flexDir="column"
      h="100vh"
      p={10}
      w={250}
    >
      <SidebarContent align="left" spacing={7} />
      <Projects align="left" spacing={5} mt={5} />
      <Teams align="left" spacing={5} mt={5} />
    </Flex>
  );
};