import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import styles from './styles.module.css';
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
