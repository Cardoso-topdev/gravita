import { SimpleGrid, GridItem } from '@chakra-ui/react';
import { LeftSidebar, RightSidebar } from './sidebar';
import { ChatApp } from './chat/ChatApp';
import { Drawer } from './Drawer';
import { sizes } from 'theme/sizes';

export const Dash: React.FC = (): JSX.Element => (
  <SimpleGrid templateColumns="repeat(6, 1fr)">
    <GridItem colSpan={1}>
      <LeftSidebar />
    </GridItem>
    <GridItem colSpan={4}></GridItem>
    <GridItem colSpan={1}>
      <RightSidebar />
    </GridItem>
    <Drawer openButtonTitle="open" size={sizes.lg}>
      <ChatApp />
    </Drawer>
  </SimpleGrid>
);
