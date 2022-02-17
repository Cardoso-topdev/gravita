import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { Grid, GridItem } from '@chakra-ui/react';
import { ProfileStats } from './ProfileStats';
import { SearchBar } from '../SearchBar';
import { Profiles } from './Profiles';

export const ProfileWrapper: FC = () => {
  const [query, setQuery] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const debounceHandleChange = useMemo(() => debounce(handleChange, 600), []);

  useEffect(() => {
    return () => {
      debounceHandleChange.cancel();
    };
  }, [debounceHandleChange]);

  return (
    <Grid p={5} gap={2} templateColumns='repeat(5, 1fr)'>
      <GridItem colSpan={5}>
        <SearchBar
          containerStyle={{ mb: 5 }}
          onChange={debounceHandleChange}
          placeholder='Search members'
        />
      </GridItem>
      <GridItem colSpan={2}>
        <ProfileStats />
      </GridItem>
      <GridItem colSpan={3}>
        <Profiles query={query} />
      </GridItem>
    </Grid>
  );
};
