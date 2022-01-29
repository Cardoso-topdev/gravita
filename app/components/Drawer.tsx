import { FC, PropsWithChildren } from 'react';
import {
  Drawer as ChackraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerProps,
  useDisclosure,
} from '@chakra-ui/react';
import { IconButton } from './IconButton';
import { IoIosClose } from 'react-icons/io';

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
      <IconButton icon={IoIosClose} boxSize={8} onClick={onOpen}  />
      <ChackraDrawer isOpen={isOpen} onClose={onClose} {...rest}>
        <DrawerOverlay />
        <DrawerContent>{children}</DrawerContent>
      </ChackraDrawer>
    </>
  );
};
