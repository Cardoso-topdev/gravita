import { useEffect } from 'react';
import Router from 'next/router';
import { useAuthContext } from 'context/AuthContext';

export function WithAuthentication<P extends {}>(Component: React.ComponentType<P>) {
  return function AuthHoc(props) {
    const { session } = useAuthContext();

    useEffect(() => {
      if (!session) {
        Router.push('/login');
      }
    }, [session]);

    return <Component {...props} />;
  };
}
