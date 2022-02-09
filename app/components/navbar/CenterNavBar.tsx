import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, useColorMode } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { NavCenterTabItem } from './NavCenterTabItem';
import styles from './styles.module.css';

const navTabList = [
  {
    title: "Our Principles",
    normalImgSrc: "/images/nav-tab-icon1-dark.png",
    focusImgSrc: "/images/nav-tab-icon1-active.svg",
    focus: false,
  },
  {
    title: "Voting",
    normalImgSrc: "/images/nav-tab-icon1-dark.png",
    focusImgSrc: "/images/nav-tab-icon1-active.svg",
    focus: true,
  }
];

export const CenterNavBar = (): JSX.Element => {
  const [navTabs, updateNavTabList] = React.useState(navTabList);
  const removeItemWithTitle = (title) => {
    for (let idx = 0; idx < navTabs.length; idx++) {
      const tab = navTabs[idx];
      if (title === tab.title) {
        navTabs.splice(idx, 1)
        if (navTabs.length > 0) {
          navTabs[navTabs.length - 1].focus = true
        }
        break;
      }
    }
    updateNavTabList([...navTabs]);
  }
  const clickTabItem = (title) => {
    for (let idx = 0; idx < navTabs.length; idx++) {
      const tab = navTabs[idx];
      if (title === tab.title) {
        tab.focus = true;
      } else {
        tab.focus = false;
      }
    }
    updateNavTabList([...navTabs]);
  }
  const { colorMode } = useColorMode();
  return (
    <Box
      className={styles.centerNavbarContainer}
      borderColor="whiteAlpha.300"
    >
      <Box
        d="flex"
      >
        {navTabs.map((item, idx) => <NavCenterTabItem removeItemWithTitle={removeItemWithTitle} clickTabItem={clickTabItem} {...item} key={idx}/>)}
      </Box>
      <Box
        d="flex"
        alignItems="center"
      >
        <FiPlus
          className={styles.navCenterRightPlus}
        />
        <SearchIcon
          className={styles.navCenterRightSearch}
          color="secondaryGray"
        />
      </Box>
    </Box>
  )
};
