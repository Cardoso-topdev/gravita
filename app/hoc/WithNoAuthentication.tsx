import { useEffect } from 'react';
import Router from 'next/router';
import { Loader } from 'components/Loader';
import { useAuthContext } from 'context/AuthContext';

export function WithNoAuthentication<P extends {}>(
  Component: React.ComponentType<P>
) {
  return function AuthHoc(props: P) {
    const { session, loading } = useAuthContext();

    useEffect(() => {
      if (session) {
        Router.push('/dashboard');
      }
    }, [session]);

    if (!loading) {
      return <Component {...props} />;
    } else {
      return <Loader />;
    }
  };
}
