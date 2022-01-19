import { SimpleGrid, GridItem, Box } from '@chakra-ui/react';
import { Sidebar } from './sidebar/Sidebar';

export const Dash: React.FC = () => (
  <SimpleGrid templateColumns="repeat(5, 1fr)">
    <GridItem colSpan={1}>
      <Sidebar />
    </GridItem>
    <GridItem colSpan={4}>
      <Box mt='20px'> 
         Main Dashboard 
      </Box>
    </GridItem>
  </SimpleGrid>
);
