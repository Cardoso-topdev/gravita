import { FC, PropsWithChildren } from 'react';
import {
  Drawer as ChackraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerProps,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { IoIosClose } from 'react-icons/io';
import { colors } from 'theme/colors';
import { sizes } from 'theme/sizes';

interface Props extends Omit<DrawerProps, 'onOpen' | 'isOpen' | 'onClose'> {
  openButtonTitle: string;
}

export const Drawer: FC<PropsWithChildren<Props>> = ({
  children,
  openButtonTitle,
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Open drawer"
        bg={colors.gray700}
        borderRadius={15}
        bottom={150}
        icon={<IoIosClose color={colors.teal} size={sizes.xxl} />}
        onClick={onOpen}
        right={50}
        position="absolute"
        size={sizes.lg}
        zIndex={1}
      />
      <ChackraDrawer isOpen={isOpen} onClose={onClose} {...rest}>
        <DrawerOverlay />
        <DrawerContent>{children}</DrawerContent>
      </ChackraDrawer>
    </>
  );
};
