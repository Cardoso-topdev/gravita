import { FC, PropsWithChildren, useMemo, useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from 'lib/base/client';
import { createCtx } from 'utils/context';
import { getUserProfile } from 'lib/base/profiles';
import { definitions } from 'lib/base/types';

type Profile = definitions['profiles'] | null;

interface AuthContext {
  profile: Profile;
  session: Session;
  loading: boolean;
}

export const [useAuthContext, AuthContext] = createCtx<AuthContext>();

export const AuthContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [profile, setProfile] = useState<Profile>(null);

  const [session, setSession] = useState<Session | null>(() =>
    supabase.auth.session(),
  );

  useEffect(() => {
    if (!session) {
      setLoading(false);

      return;
    }
    getUserProfile(session.user.id)
      .then(({ data }) => setProfile(data[0]))
      .finally(() => setLoading(false));
  }, [session]);

  useEffect(() => {
    const sub = supabase.auth.onAuthStateChange((event, sess) => {
      setSession(sess);
    });

    return sub.data.unsubscribe;
  }, [setSession]);

  const value = useMemo<AuthContext>(
    () => ({ session, loading, profile }),
    [session, loading, profile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
