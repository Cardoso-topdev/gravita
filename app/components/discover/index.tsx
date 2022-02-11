import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { CenterNavBar } from 'components/navbar/CenterNavBar';

export const Discover: FC = () => {
  return (
    <Box className="main-container">
      <CenterNavBar />
      <Box p={{ base: 5, lg: 10 }}>
        Discover
      </Box>
    </Box>
  );
};
