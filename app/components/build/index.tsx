import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import styles from './styles.module.css';

export const Build: FC = (): JSX.Element => {
  return (
    <Box>
      <Heading as={'h1'} className={styles.title}>Work on projects you care about.</Heading>
      <Text className={styles.description}>With Gravita, you can focus on what you love working on while helping the community grow.</Text>
      <Box mt={10} className={styles.coreGraph}>
        <Image
          alt="Build Core"
          src="/images/build_core.png"
        />
        <Box className={styles.evolveContainer}>
          <Image
            alt="Build Evolve"
            src="/images/build_evolve.png"
          />
          <Text>EVOLVE</Text>
        </Box>
        <Box className={styles.identityContainer}>
          <Image
            alt="Build Identity"
            src="/images/build_identity.png"
          />
          <Text>IDENTITY</Text>
        </Box>
        <Box className={styles.wealthContainer}>
          <Image
            alt="Build Wealth"
            src="/images/build_wealth.png"
          />
          <Text>WEALTH</Text>
        </Box>
        <Box className={styles.operateContainer}>
          <Image
            alt="Build Operate"
            src="/images/build_operate.png"
          />
          <Text>OPERATE</Text>
        </Box>
        <Box className={styles.impactContainer}>
          <Image
            alt="Build Impact"
            src="/images/build_impact.png"
          />
          <Text>IMPACT</Text>
        </Box>
      </Box>
    </Box>
  )
}