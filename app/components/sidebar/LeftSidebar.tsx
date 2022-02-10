import { FC } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { SidebarContent } from './SidebarContent';
import { Projects } from './Projects';
import { Teams } from './Teams';
import { LeftNavBar } from 'components/navbar/LeftNavBar';

export const LeftSidebar: FC = () => {
  return (
    <Box borderWidth={1} h="100vh">
      <LeftNavBar />
      <Flex flexDir="column" p={10} w={250}>
        <SidebarContent align="left" spacing={7} />
        <Projects align="left" spacing={5} mt={5} />
        <Teams align="left" spacing={5} mt={5} />
      </Flex>
    </Box>
  );
};
