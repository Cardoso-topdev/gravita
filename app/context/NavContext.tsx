import { FC, PropsWithChildren, useMemo, useState, useEffect } from 'react';
import { createCtx } from 'utils/context';
import { NavStatus } from 'utils/types';

interface NavContext {
  navStatus: NavStatus[];
  setNavStatus: Function;
}

export const [useNavContext, NavContext] = createCtx<NavContext>();

export const NavContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [navStatus, setNavStatus] = useState<NavStatus[]>([])

  const value = useMemo<NavContext>(
    () => ({ navStatus, setNavStatus }),
    [navStatus],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
