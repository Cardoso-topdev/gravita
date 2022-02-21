import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { BuildItemDescription } from "./BuildItemDescription";
import styles from './styles.module.css';

export const Build: FC = (): JSX.Element => {
  const [showIdentity, setShowIdentity] = useState(false);
  function identityOver() {
    setShowIdentity(true);
  }
  function identityOut() {
    setShowIdentity(false);
  }
  const [showEvolve, setShowEvolve] = useState(false);
  function evolveOver() {
    setShowEvolve(true);
  }
  function evolveOut() {
    setShowEvolve(false);
  }
  const [showWealth, setShowWealth] = useState(false);
  function wealthOver() {
    setShowWealth(true);
  }
  function wealthOut() {
    setShowWealth(false);
  }
  const [showOperate, setShowOperate] = useState(false);
  function operateOver() {
    setShowOperate(true);
  }
  function operateOut() {
    setShowOperate(false);
  }
  const [showImpact, setShowImpact] = useState(false);
  function impactOver() {
    setShowImpact(true);
  }
  function impactOut() {
    setShowImpact(false);
  }

  const identityDescription = {
    title: 'Gravita Identity',
    description: 'The source of truth for personal and business identities. Decentralized identities that go where you go.',
    memberCnt: 51,
    investmentDate: '$504,990',
    investmentNeeded: '$1.5M',
    openRolesToFill: `Marketing Expert
    Graphic Designer
    Senior React Developer`
  }
  return (
    <Box>
      <Heading as={'h1'} className={styles.title}>Work on projects you care about.</Heading>
      <Text className={styles.description}>With Gravita, you can focus on what you love working on while helping the community grow.</Text>
      <Box mt={10} className={styles.coreGraph}>
        <Image
          alt="Build Core"
          src="/images/build_core.png"
        />
        <Box
          className={styles.evolveContainer}
          onMouseOver={evolveOver}
          onMouseOut={evolveOut}
        >
          <Image
            alt="Build Evolve"
            src="/images/build_evolve.png"
          />
          <Text>EVOLVE</Text>
          <BuildItemDescription 
            visibility={showEvolve}
            position={'left'}
            itemDescription={identityDescription}
          />
        </Box>
        <Box
          className={styles.identityContainer}
          onMouseOver={identityOver}
          onMouseOut={identityOut}
        >
          <Image
            alt="Build Identity"
            src="/images/build_identity.png"
          />
          <Text>IDENTITY</Text>
          <BuildItemDescription 
            visibility={showIdentity}
            position={'right'}
            itemDescription={identityDescription}
          />
        </Box>
        <Box
          className={styles.wealthContainer}
          onMouseOver={wealthOver}
          onMouseOut={wealthOut}
        >
          <Image
            alt="Build Wealth"
            src="/images/build_wealth.png"
          />
          <Text>WEALTH</Text>
          <BuildItemDescription 
            visibility={showWealth}
            position={'left'}
            itemDescription={identityDescription}
          />
        </Box>
        <Box
          className={styles.operateContainer}
          onMouseOver={operateOver}
          onMouseOut={operateOut}
        >
          <Image
            alt="Build Operate"
            src="/images/build_operate.png"
          />
          <Text>OPERATE</Text>
          <BuildItemDescription 
            visibility={showOperate}
            position={'right'}
            itemDescription={identityDescription}
          />
        </Box>
        <Box
          className={styles.impactContainer}
          onMouseOver={impactOver}
          onMouseOut={impactOut}
        >
          <Image
            alt="Build Impact"
            src="/images/build_impact.png"
          />
          <Text>IMPACT</Text>
          <BuildItemDescription 
            visibility={showImpact}
            position={'top'}
            itemDescription={identityDescription}
          />
        </Box>
      </Box>
    </Box>
  )
}