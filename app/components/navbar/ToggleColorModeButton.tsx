import { useColorMode, Icon } from '@chakra-ui/react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from './navbar.module.css';

export const ToggleColorModeButton = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === 'light') {
    return <Icon
      className={styles.navIcon}
      as={BsFillSunFill}
      onClick={toggleColorMode}
    />
  } else {
    return <Icon
      className={styles.navIcon}
      as={BsFillMoonFill}
      onClick={toggleColorMode}
    />
  }
};
