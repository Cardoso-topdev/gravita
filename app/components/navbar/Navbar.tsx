import { Box, Avatar, Flex, Image, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from 'next/link';
import { supabase } from 'lib/base';
import { useAuthContext } from 'context/AuthContext';
import styles from './navbar.module.css';
import { BellIcon } from '@chakra-ui/icons'
import { ToggleColorModeButton } from './ToggleColorModeButton';

export const Navbar = (): JSX.Element => {
  const { session } = useAuthContext();
  console.log('session: ', session)

  const handleSignout = () => supabase.auth.signOut();
  const onNotificationClick = () => {
    console.log("onNotificationClicked");
  };

  return session && (
    <Box
      className={styles.container}
      zIndex={1}
    >
      <Flex
        h={{ base: 'auto', lg: '65px' }}
        p="10px 0"
        mx={{ base: '0px', lg: '30px' }}
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'flex-start', lg: 'space-between' }}
        style={{ borderBottomColor: '1px solid #E2E8F0' }}
      >
        <Box mt="5px">
          <Link href="/" passHref>
            <Image
              alt="logo"
              display="inline"
              h="auto"
              src="/images/logo.png"
            />
          </Link>
        </Box>
        <Box
          d="flex"
          w="440px"
          pr="34px"
          pl="34px"
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', lg: 'center' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          {session ? (
            <>
              <Text>Howdy {session.user.email.substring(0, session.user.email.indexOf('@'))}!</Text>
              <Box
                className={styles.navIconContainer}
              >
                <ToggleColorModeButton />
                <BellIcon
                  className={styles.notifyIcon}
                  onClick={onNotificationClick}
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
      </Flex>
    </Box>
  );
};
