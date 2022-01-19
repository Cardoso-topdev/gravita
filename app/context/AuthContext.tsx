import { FC, PropsWithChildren, useMemo, useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from 'lib/base';
import { createCtx } from 'utils/context';

interface AuthContext {
  session: Session;
  loading: boolean;
}

export const [useAuthContext, AuthContext] = createCtx<AuthContext>();

export const AuthContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [session, setSession] = useState<Session | null>(() =>
    supabase.auth.session()
  );

  useEffect(() => {
    if(session) {
      setLoading(false);
    }
  }, [session])

  useEffect(() => {
    const sub = supabase.auth.onAuthStateChange((event, sess) => {
      setSession(sess);
    });

    return sub.data.unsubscribe;
  }, [setSession]);

  const value = useMemo<AuthContext>(() => ({ session, loading }), [session, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
