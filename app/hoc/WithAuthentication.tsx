import { useEffect } from 'react';
import Router from 'next/router';
import { Loader } from 'components/Loader';
import { useAuthContext } from 'context/AuthContext';

export function WithAuthentication<P extends {}>(
  Component: React.ComponentType<P>,
) {
  return function AuthHoc(props: P) {
    const { session, loading } = useAuthContext();

    useEffect(() => {
      if (!session) {
        Router.push('/');
      }
    }, [session]);

    if (loading) {
      return <Loader />;
    }

    return <Component {...props} />;
  };
}

// export const getServerSideProps = async () => {

// }
