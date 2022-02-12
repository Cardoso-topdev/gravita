import React from 'react';

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export function createCtx<T extends {} | null>(defaultValue?: T) {
  const context = React.createContext<T | undefined>(defaultValue);

  function useCtx() {
    const ctx = React.useContext(context);
    if (ctx === undefined) {
      throw new Error('useCtx must be inside a Provider with a value');
    }
    return ctx;
  }

  return [useCtx, context] as const;
}
