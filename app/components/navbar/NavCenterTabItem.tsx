import { FC } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import styles from './styles.module.css';
import { IoIosClose } from 'react-icons/io';

interface Props {
  title: string;
  focus: boolean;
  normalImgSrc: string;
  focusImgSrc: string;
  removeItemWithTitle: Function;
  clickTabItem: Function;
}

export const NavCenterTabItem: FC<Props> = ({
  title,
  focus,
  normalImgSrc,
  focusImgSrc,
  removeItemWithTitle,
  clickTabItem,
}): JSX.Element => {
  return (
    <Box
      className={
        focus
          ? styles.navCenterTabIconWrapper + ' ' + styles.navCenterTabIconFocus
          : styles.navCenterTabIconWrapper
      }
      borderColor="teal"
    >
      <Box d="flex" onClick={() => clickTabItem(title)}>
        <Image
          alt="logo"
          src={focus ? focusImgSrc : normalImgSrc}
          className={styles.navCenterTabIcon}
        />
        <Text color={focus ? 'teal' : 'primaryGray'} mt={1}>
          {title}
        </Text>
      </Box>
      {focus && (
        <IoIosClose
          onClick={() => removeItemWithTitle(title)}
          className={styles.tabCloseIcon}
        />
      )}
    </Box>
  );
};
