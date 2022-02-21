import { FC, ChangeEvent, useState, useEffect } from 'react';
import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { getAllProfiles } from 'lib/base/profiles';
import { useData } from 'hooks/useData';
import { ProfileCard } from './ProfileCard';
import { Loader } from '../Loader';
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

interface Props {
  name?: string;
}

export const Profiles: FC<Props> = ({ name }) => {
  const [profiles, loading, reloadData] = useData(() => getAllProfiles());

  const [sortOrder, setSortOrder] = useState<boolean>(true);

  useEffect(() => {
    reloadData(() =>
      getAllProfiles({ orderBy: { ascending: sortOrder }, name }),
    );
  }, [name, sortOrder, reloadData]);

  const handleOrderSort = (e: ChangeEvent<HTMLSelectElement>): void => {
    const sortOrder = e.target.value === Sort.Asc ? true : false;

    reloadData(() => getAllProfiles({ orderBy: { ascending: sortOrder } }));

    setSortOrder(sortOrder);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Flex justify='space-between' mb={2}>
        <Text {...typography.h4}>{profiles?.count} Members </Text>
        <SortSelector
          onChange={handleOrderSort}
          options={options}
          placeholder='Name'
        />
      </Flex>
      <SimpleGrid minChildWidth='150px' spacing={5}>
        {profiles?.data.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </SimpleGrid>
    </>
  );
};
