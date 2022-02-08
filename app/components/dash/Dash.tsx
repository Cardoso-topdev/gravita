import { Box } from '@chakra-ui/react';
import styles from './dash.module.css';
import { EventCard } from './EventCard';
import { SearchEvent } from './SearchEvent';

export const Dash: React.FC = (): JSX.Element => {
  const onSearchChanged = (event) => {
    console.log('onSearchChanged: ', event.target.value);
  }

  const eventCardList = [
    {
      title: "Discover",
      description: "Explore a new and better way of building great produts!"
    },
    {
      title: "Collaborate",
      description: "Connect & collaborate with other community members"
    },
    {
      title: "Build",
      description: "See how the community is growing and what's ahead."
    },
  ]

  return (
    <Box
      mx='auto'
      my={20}
      className={styles.dashContainer}
    >
      <SearchEvent
        onSearchChanged={onSearchChanged}
      />
      <Box
        className={styles.eventCardsWrapper}
        my={5}
      >
        {eventCardList.map((item, idx) => (
          <EventCard
            key={idx}
            {...item}
          />
        ))}
      </Box>
    </Box>
  );
}; 
