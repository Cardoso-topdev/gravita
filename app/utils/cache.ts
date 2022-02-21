export const createCache = <K, O>(processor: (arg: K) => O) => {
  const cache = new Map<K, O>();

  const getCache = async (key: K) => {
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = await processor(key);

    cache.set(key, result);

    return result;
  };
  return getCache;
};
