import { SimpleGrid, GridItem, Box } from '@chakra-ui/react';
import { Sidebar } from './sidebar/Sidebar';
import { ChatApp } from './chat/ChatApp';

export const Dash: React.FC = () => (
  <SimpleGrid templateColumns="repeat(6, 1fr)">
    <GridItem colSpan={1}>
      <Sidebar />
    </GridItem>
    <GridItem colSpan={2}>
      <Box mt="20px"></Box>
    </GridItem>
    <GridItem colSpan={3}>
      <Box>
        <ChatApp />
      </Box>
    </GridItem>
  </SimpleGrid>
);
