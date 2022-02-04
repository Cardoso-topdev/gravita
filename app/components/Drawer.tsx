import { FC, PropsWithChildren } from 'react';
import {
  Drawer as ChackraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerProps,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { IoIosChatbubbles, IoIosClose } from 'react-icons/io';
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
        bg="gray.700"
        borderRadius={15}
        bottom={150}
        icon={isOpen ? <IoIosClose color="teal" size={sizes.xxl} /> : <IoIosChatbubbles color="teal" size={sizes.xxl} />}
        onClick={onOpen}
        right={50}
        position="absolute"
        size="lg"
        zIndex={1}
      />
      <ChackraDrawer isOpen={isOpen} onClose={onClose} {...rest}>
        <DrawerOverlay />
        <DrawerContent>{children}</DrawerContent>
      </ChackraDrawer>
    </>
  );
};
