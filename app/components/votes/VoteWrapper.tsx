import { FC, useState } from 'react';
import {
  Box,
  Heading,
  Tabs,
  Tab,
  TabList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useFilterVotes } from 'hooks/useFilterVotes';
import { VoteCard } from './VoteCard';
import { Loader } from '../Loader';
import { typography } from 'theme/typography';

export const VotesWrapper: FC = () => {
  const { loading, votes, setFilter, Filter } = useFilterVotes();

  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);

    switch (index) {
      case 1:
        setFilter(Filter.open);
        break;
      case 2:
        setFilter(Filter.closed);
        break;
      default:
        setFilter(null);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box p={50}>
      <Heading {...typography.pageHeading} mb={5}>
        Voting
      </Heading>
      <Tabs
        index={tabIndex}
        mb={5}
        colorScheme="teal"
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Open</Tab>
          <Tab>Closed</Tab>
        </TabList>
      </Tabs>
      <Wrap spacing={10}>
        {votes.map((vote) => (
          <WrapItem key={vote.sys.id}>
            <VoteCard
              createdAt={vote.createdAt}
              status={vote.status}
              title={vote.title}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
