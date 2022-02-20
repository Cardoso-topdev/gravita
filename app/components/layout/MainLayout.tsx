import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';
import { ChatApp } from 'components/chat/ChatApp';
import { LeftSidebar, RightSidebar } from 'components/sidebar';
import { Drawer } from '../Drawer';
import { sizes } from 'theme/sizes';
import { CenterNavBar } from 'components/navbar/CenterNavBar';

export default function MainLayout({ children }) {
  return (
    <>
      <SimpleGrid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1}>
          <LeftSidebar />
        </GridItem>
        <GridItem colSpan={4}>
          <Box className="main-container">
            <CenterNavBar />
            <Box className="main-content-wrapper">
              {children}
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <RightSidebar />
        </GridItem>
        <Drawer openButtonTitle="open" size={sizes.lg}>
          <ChatApp />
        </Drawer>
      </SimpleGrid>
    </>
  );
}
