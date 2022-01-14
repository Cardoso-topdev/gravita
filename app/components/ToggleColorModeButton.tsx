import { useColorMode, IconButton, Icon } from '@chakra-ui/react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export const ToggleColorModeButton = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <IconButton
      w="40px"
      aria-label="toggle color mode"
      icon={
        colorMode === 'light' ? (
          <Icon as={BsFillSunFill} />
        ) : (
          <Icon as={BsFillMoonFill} />
        )
      }
      mr="10px"
      onClick={toggleColorMode}
    />
  );
};
