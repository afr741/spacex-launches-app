import { Button } from '@/components/ui';
import { signOut, signIn } from 'next-auth/react';
import React from 'react';

const LogoutButton: React.FC<{ isLogout: boolean }> = ({ isLogout }) => {
  const handlerLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    // signOut();
    isLogout ? signIn() : signOut();
  };

  return (
    <Button size="sm" onClick={handlerLogout}>
      {isLogout ? 'CHANGE INFO' : 'LOGOUT'}
    </Button>
  );
};

export default LogoutButton;
