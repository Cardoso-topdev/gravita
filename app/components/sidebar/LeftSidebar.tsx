import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { SidebarContent } from './SidebarContent';
import { Projects } from './Projects';
import { Teams } from './Teams';

export const LeftSidebar: FC = () => {
  return (
    <Flex
      borderWidth={1}
      borderLeftColor="white"
      flexDir="column"
      h="calc(100vh - 66px)"
      p={10}
    >
      <SidebarContent align="left" spacing={7} />
      <Projects align="left" spacing={5} mt={5} />
      <Teams align="left" spacing={5} mt={5} />
    </Flex>
  );
};
