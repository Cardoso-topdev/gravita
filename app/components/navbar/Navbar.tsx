import { useState } from 'react';
import { Box, Avatar, Flex, Image, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from 'next/link';
import { supabase } from 'lib/base';
import { useAuthContext } from 'context/AuthContext';
import { ToggleColorModeButton } from '../ToggleColorModeButton';
import styles from './navbar.module.css';
import { NotificationButton } from 'components/NotificationButton';

export const Navbar = (): JSX.Element => {
  const { session } = useAuthContext();
  const [isProfileDropdownOpen, toggleProfileDropdown] = useState<Boolean>(false);

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
          <Link href="/dashboard" passHref>
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
              <Text>Howdy Mike!</Text>
              <Box>
                <ToggleColorModeButton />
                <NotificationButton onNotificationClick={onNotificationClick}/>
                <Menu>
                  <MenuButton
                    as={Button}
                    w="44px"
                    p="0"
                    isActive={isProfileDropdownOpen}
                    background={'transparent'}
                  >
                    <Avatar
                      name='Dan Abrahmov'
                      h="40px"
                      w="40px"
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
              {/* <Link href="/dashboard">Dashboard</Link>
              <Button onClick={handleSignout}> Logout </Button> */}
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
