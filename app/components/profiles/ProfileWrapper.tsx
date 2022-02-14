import { ChangeEvent, FC } from 'react';
import {
  Flex,
  Heading,
  SimpleGrid,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { ProfileCard } from './ProfileCard';
import { ProfileStats } from './ProfileStats';
import { Loader } from '../Loader';
import { SearchBar } from '../SearchBar';
import { useData } from 'hooks/useData';
import { getAllProfiles } from 'lib/base/profiles';
import { SortSelector } from '../SortSelector';
import { typography } from 'theme/typography';

enum Sort {
  Asc = 'asc',
  Desc = 'desc',
}

const options = [
  { value: Sort.Asc, label: 'Asc' },
  { value: Sort.Desc, label: 'Desc' },
];

export const ProfileWrapper: FC = () => {
  const [profiles, loading, reloadData] = useData(() => getAllProfiles());

  const handleOrderSort = (e: ChangeEvent<HTMLSelectElement>): void => {
    const sortOrder = e.target.value === Sort.Asc ? true : false;

    reloadData(() => getAllProfiles({ ascending: sortOrder }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid p={5} gap={2} templateColumns='repeat(5, 1fr)'>
      <GridItem colSpan={5}>
        <SearchBar mb={5} placeholder='Search members' />
      </GridItem>
      <GridItem colSpan={5}>
        <Flex justify='space-between'>
          <Heading mb={5} {...typography.h4}>
            Refine and Filter
          </Heading>
          <Text {...typography.h4}>{profiles?.count} Members </Text>
          <SortSelector
            onChange={handleOrderSort}
            options={options}
            placeholder='Name'
          />
        </Flex>
      </GridItem>
      <GridItem colSpan={2}>
        <ProfileStats />
      </GridItem>
      <GridItem colSpan={3}>
        <SimpleGrid minChildWidth='150px' spacing={5}>
          {profiles?.data.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};
