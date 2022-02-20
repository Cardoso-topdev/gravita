import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { HeroSection } from './HeroSection';
import { StatSection } from './StatSection';
import { JoinCommunitySection } from './JoinCommunitySection';
import { VisionSection } from './VisionSection';

export const Discover: FC = () => {
  return (
    <Box>
      <HeroSection />
      <StatSection />
      <JoinCommunitySection />
      <VisionSection />
    </Box>
  );
};
