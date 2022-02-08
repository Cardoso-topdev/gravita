import Link from 'next/link';
import { Box, Text, Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useAuthContext } from 'context/AuthContext';
import { textToCapitalizeWord } from 'utils/common';
import { ToggleColorModeButton } from './ToggleColorModeButton';
import { NotificationButton } from './NotificationButton';
import { supabase } from 'lib/base/client';
import styles from './styles.module.css';

export const RightNavBar = (): JSX.Element => {
  const { session } = useAuthContext();
  const onNotificationClick = () => {
    console.log("onNotificationClicked");
  };
  const handleSignout = () => supabase.auth.signOut();

  return (
    <Box
      d="flex"
      px="34px"
      py="10px"
      justifyContent="space-between"
      alignItems={{ base: 'flex-start', lg: 'center' }}
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      {session ? (
        <>
          <Text>Howdy {textToCapitalizeWord(session.user.email.substring(0, session.user.email.indexOf('@')))}!</Text>
          <Box
            className={styles.navIconContainer}
          >
            <ToggleColorModeButton />
            <NotificationButton
              hasNewNotification={true}
              onNotificationClick={onNotificationClick}
            />
            <Menu>
              <MenuButton
                className={styles.navMenuBtn}
                as={Button}
              >
                <Avatar
                  name='Dan Abrahmov'
                  className={styles.userAvatar}
                  src='https://bit.ly/dan-abramov'
                />
              </MenuButton>
              <MenuList >
                <MenuItem onClick={() => alert('Account')}>Account</MenuItem>
                <MenuItem onClick={() => alert('Settings')}>Settings</MenuItem>
                <MenuItem onClick={() => alert('Knowledgebase')}>Knowledgebase</MenuItem>
                <MenuItem onClick={() => alert('Feedback')}>Feedback</MenuItem>
                <MenuItem onClick={handleSignout}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </>
      ) : (
        <>
          <Link href="/">Login</Link>
          <Link href="/signup">Signup</Link>
          <ToggleColorModeButton />
        </>
      )}
    </Box>
  )
};
