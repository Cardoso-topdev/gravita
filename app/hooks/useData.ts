import { useState, useEffect, useRef, useCallback } from 'react';

type Loader = boolean;
type Query<T> = () => Promise<T>;

export const useData = <T>(query: Query<T>, deps?: unknown) => {
  const [data, setData] = useState<T | undefined>();

  const [loading, setLoading] = useState<Loader>(false);

  const ref = useRef(query);

  const loadData = useCallback(async (newQuery?: Query<T>) => {
    setLoading(true);

    const queryResult = (await newQuery?.()) || (await ref.current());

    setData(queryResult);

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    loadData();
  }, [loadData, deps]);

  return [data, loading, loadData] as const;
};
