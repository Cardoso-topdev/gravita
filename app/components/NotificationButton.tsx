import { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons'

interface Props {
  onNotificationClick: () => void;
}

export const NotificationButton: FC<Props> = ({ onNotificationClick }): JSX.Element => {
  return (
    <IconButton
      w="40px"
      aria-label="toggle color mode"
      icon={ <BellIcon /> }
      mr="10px"
      onClick={onNotificationClick}
    />
  );
};
