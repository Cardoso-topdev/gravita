import { BellIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import styles from './styles.module.css';

export const NotificationButton = ({ hasNewNotification, onNotificationClick }): JSX.Element => {
  if (hasNewNotification) {
    return (
      <Box
        as='div'
        className={styles.notifyIconWrapper}
      >
        <BellIcon
          className={styles.notifyIcon}
          onClick={onNotificationClick}
        />
        <Box
          className={styles.hasNewNotifications}
          as='span'
        />
      </Box>
    )
  }
  return <BellIcon
    className={styles.notifyIcon}
    onClick={onNotificationClick}
  />
};
