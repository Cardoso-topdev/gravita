import { FC } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { SidebarContent } from './SidebarContent';
import { Projects } from './Projects';
import { Teams } from './Teams';
import styles from './sidebar.module.css';

export const Sidebar: FC = () => {
  return (
    <Box
      className={styles.sidebar}
    >
      <SimpleGrid height='100%'>
        <SidebarContent />
        <Projects />
        <Teams />
      </SimpleGrid>
    </Box>
  );
};
