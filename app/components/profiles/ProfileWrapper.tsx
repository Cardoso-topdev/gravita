import { FC } from 'react';
import { SimpleGrid, Grid, GridItem } from '@chakra-ui/react';
import { ProfileCard } from './ProfileCard';
import { ProfileStats } from './ProfileStats';
import { Loader } from '../Loader';
import { ProfileHeader } from './ProfileHeader';
import { useData } from 'hooks/useData';
import { getAllProfiles } from 'lib/base/profiles';


export const ProfileWrapper: FC = () => {
  const [profiles, loading] = useData(getAllProfiles);

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid p={5} gap={2} templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={5} rowSpan={1}>
        <ProfileHeader />
      </GridItem>
      <GridItem colSpan={2}>
        <ProfileStats />
      </GridItem>
      <GridItem colSpan={3}>
        <SimpleGrid minChildWidth="150px" spacing={5}>
          {profiles?.data.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};
