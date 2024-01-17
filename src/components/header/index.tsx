import { ColorModeSwitcher, NavBar } from '@/components';
import { Box, Spacer } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React, { useMemo } from 'react';
import { Logo } from '../logo';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export const Header: React.FC = () => {
  const { data: session } = useSession();

  const AuthInfo = useMemo(() => {
    if (session) {
      return (
        <>
          <Box display="flex" alignItems="center">
            <Box mr="5">{session.user ? session.user.email : 'ERROR'}</Box>
            <LogoutButton isLogout={false} />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr="5">{session.user ? session.user.email : 'ERROR'}</Box>
            <LogoutButton isLogout={true} />
          </Box>
        </>
      );
    } else {
      return <LoginButton />;
    }
  }, [session]);

  return (
    <Box h="58" bg="headerBg" display="flex" px="10" alignItems="center">
      <Box>
        <Logo />
      </Box>
      {/* <Box ml="10">
        <NavBar />
      </Box> */}
      <Spacer />
      <ColorModeSwitcher mr="5" />
      {AuthInfo}
    </Box>
  );
};
