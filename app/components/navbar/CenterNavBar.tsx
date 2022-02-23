import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { NavCenterTabItem } from './NavCenterTabItem';
import { useRouter } from 'next/router';
import { navTabList } from 'utils/const';
import styles from './styles.module.css';
import { useNavContext } from 'context/NavContext';

export const CenterNavBar = (): JSX.Element => {

  const { navStatus, setNavStatus } = useNavContext();

  const router = useRouter();

  let hasContainTab = false;
  for (let idx = 0; idx < navStatus.length; idx++) {
    const tab = navStatus[idx];
    if (tab && (router.pathname.startsWith(tab.navPath))) {
      tab.focus = true;
      hasContainTab = true
    } else {
      tab.focus = false;
    }
  }

  if (!hasContainTab && (router.pathname !== '/dashboard')) {
    const idx = router.pathname.indexOf('[');
    const pathName = router.pathname.substring(0, idx != -1 ? (idx - 1) : router.pathname.length);
    if (navTabList[pathName]) {
      navStatus.push(navTabList[pathName])
      setNavStatus([...navStatus]);
    }
  }

  const removeItemWithTitle: Function = (title: string) => {
    for (let idx = 0; idx < navStatus.length; idx++) {
      const tab = navStatus[idx];
      if (title === tab.title) {
        navStatus.splice(idx, 1);
        break;
      }
    }
    setTimeout(() => setNavStatus([...navStatus]), 0);
    router.replace('/dashboard');
  };

  const clickTabItem = (title) => {
    let focusTab;
    for (let idx = 0; idx < navStatus.length; idx++) {
      const tab = navStatus[idx];
      if (title === tab.title) {
        focusTab = tab
        break;
      }
    }
    setNavStatus([...navStatus]);
    router.replace(focusTab.navPath)
  };

  return (
    <Box className={styles.centerNavbarContainer} borderColor="whiteAlpha.300">
      <Box d="flex">
        {navStatus.map((item, idx) => (
          <NavCenterTabItem
            removeItemWithTitle={removeItemWithTitle}
            clickTabItem={clickTabItem}
            {...item}
            key={idx}
          />
        ))}
      </Box>
      <Box d="flex" alignItems="center">
        <FiPlus className={styles.navCenterRightPlus} />
        <SearchIcon
          className={styles.navCenterRightSearch}
          color="secondaryGray"
        />
      </Box>
    </Box>
  );
};
