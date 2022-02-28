import {
  FC,
  PropsWithChildren,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase, getSession } from 'lib/base/client';
import { createCtx } from 'utils/context';
import { getUserProfile, Profile } from 'lib/base/profiles';

interface AuthContext {
  profile: Profile | null;
  session: Session;
  loading: boolean;
  loadProfile: () => Promise<void>
}

export const [useAuthContext, AuthContext] = createCtx<AuthContext>();

export const AuthContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [profile, setProfile] = useState<Profile>(null);

  const [session, setSession] = useState<Session | null>(() => getSession());

  const loadProfile = useCallback<() => Promise<void>>(async () => {
    try {
      const { data } = await getUserProfile(session.user.id);

      setProfile(data[0]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [session?.user.id]);

  useEffect(() => {
    if (!session) {
      setLoading(false);

      return;
    }
    loadProfile()
  }, [session, loadProfile]);

  useEffect(() => {
    const sub = supabase.auth.onAuthStateChange((event, sess) => {
      setSession(sess);
    });

    return sub.data.unsubscribe;
  }, [setSession]);

  const value = useMemo<AuthContext>(
    () => ({ session, loading, profile, loadProfile }),
    [session, loading, profile, loadProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
