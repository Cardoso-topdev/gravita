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
      <ChackraDrawer isOpen={isOpen} onClose={onClose} {...rest}>
        <DrawerOverlay />
        <DrawerContent>
          {children}
          <IconButton
            aria-label="Open drawer"
            bg="gray.700"
            borderRadius={15}
            bottom={10}
            icon={<IoIosClose color="teal" size={sizes.xxl} />}
            onClick={onClose}
            right={10}
            position="absolute"
            size="lg"
            zIndex={1}
          />
        </DrawerContent>
      </ChackraDrawer>
      <IconButton
        aria-label="Open drawer"
        bg="gray.700"
        borderRadius={15}
        bottom={10}
        icon={<IoIosChatbubbles color="teal" size={sizes.xxl} />}
        onClick={onOpen}
        right={10}
        position="absolute"
        size="lg"
        zIndex={1}
      />
    </>
  );
};
