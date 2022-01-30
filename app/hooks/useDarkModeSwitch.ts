import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

export const useDarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [darkModeLoading, setDarkModeLoading] = useState<boolean>(false);

  const handleColorMode = () => {
    setDarkModeLoading(true);

    toggleColorMode();

    setDarkModeLoading(false);
  };

  const isDark = colorMode === 'dark' ? true : false;

  return {
    isDark,
    darkModeLoading,
    handleColorMode,
  };
};
