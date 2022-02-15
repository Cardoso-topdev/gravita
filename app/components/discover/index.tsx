import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { HeroSection } from './HeroSection';
import { StatSection } from './StatSection';

export const Discover: FC = () => {
  return (
    <Box>
      <HeroSection />
      <StatSection />
    </Box>
  );
};
