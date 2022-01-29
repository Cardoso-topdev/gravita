import { SimpleGrid, GridItem, Box } from '@chakra-ui/react';
import { Sidebar } from './sidebar/Sidebar';
import { ChatApp } from './chat/ChatApp';
import { VoteCard } from './vote-card/VoteCard';

export const Dash: React.FC = (): JSX.Element => (
  <SimpleGrid templateColumns="repeat(6, 1fr)">
    <GridItem colSpan={1}>
      <Sidebar />
    </GridItem>
    <GridItem colSpan={2}>
      <Box m="10px 10px" mt="20px">
        <VoteCard title='What do you think of Gravita app?' />
      </Box>
    </GridItem>
    <GridItem colSpan={3}>
      <Box>
        <ChatApp />
      </Box>
    </GridItem>
  </SimpleGrid>
);
