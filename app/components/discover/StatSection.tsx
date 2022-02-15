import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import styles from './styles.module.css';
import { StatItem } from './StatItem';

const statInfo = [
  {
    statValue: "567",
    statType: "Total Members"
  },
  {
    statValue: "499",
    statType: "Active Members"
  },
  {
    statValue: "$500K",
    statType: "Monthly Revenue"
  },
  {
    statValue: "$7.9M",
    statType: "Available Cash"
  }
]

export const StatSection: FC = () => {
  return (
    <Box className={styles.statSectionContainer}>
      <Box className={styles.statContent}>
        {statInfo.map(item => (
          <StatItem {...item} key={item.statValue}/>
        ))}
      </Box>
    </Box>
  );
};
