import { useState, useEffect, useMemo, useCallback } from 'react';
import { findSkillKeys } from 'lib/base/profiles';
import { useAuthContext } from 'context/AuthContext';
import { createCache } from 'utils/cache';

const getCache = createCache(async (profileId: string) =>
  findSkillKeys(profileId),
);

export const useSkillTags = () => {
  const { profile } = useAuthContext();

  const [keys, setKeys] = useState<number[]>([]);

  const getCachedResult = useCallback(async () => {
    const result = await getCache(profile.id);

    setKeys([...result?.existingKeys]);
  }, [profile.id]);

  useEffect(() => {
    getCachedResult();
  }, [getCachedResult]);

  return useMemo(() => ({ keys, setKeys }), [keys]);
};
