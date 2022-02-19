import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FC } from "react";
import { BuildItemDescription } from "./BuildItemDescription";
import styles from './styles.module.css';

export const Build: FC = (): JSX.Element => {
  const [showIdentity, setShowIdentity] = React.useState(false);
  function identityOver(e) {
    setShowIdentity(true);
  }
  function identityOut(e) {
    setShowIdentity(false);
  }
  const [showEvolve, setShowEvolve] = React.useState(false);
  function evolveOver(e) {
    setShowEvolve(true);
  }
  function evolveOut(e) {
    setShowEvolve(false);
  }
  const [showWealth, setShowWealth] = React.useState(false);
  function wealthOver(e) {
    setShowWealth(true);
  }
  function wealthOut(e) {
    setShowWealth(false);
  }
  const [showOperate, setShowOperate] = React.useState(false);
  function operateOver(e) {
    setShowOperate(true);
  }
  function operateOut(e) {
    setShowOperate(false);
  }
  const [showImpact, setShowImpact] = React.useState(false);
  function impactOver(e) {
    setShowImpact(true);
  }
  function impactOut(e) {
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
            itemDescription={identityDescription}
          />
        </Box>
      </Box>
    </Box>
  )
}