import { Box } from '@chakra-ui/react';
import { Title } from 'components/Title';
import { EventCard } from './EventCard';
import { NewShortcutCard } from './NewShortcutCard';
import { SearchEvent } from './SearchEvent';
import { ShortcutCard } from './ShortcutCard';
import styles from './dash.module.css';
import { CenterNavBar } from 'components/navbar/CenterNavBar';

export const Dash: React.FC = (): JSX.Element => {
  const onSearchChanged = (event) => {
    console.log('onSearchChanged: ', event.target.value);
  };

  const eventCardList = [
    {
      title: 'Discover',
      description: 'Explore a new and better way of building great produts!',
    },
    {
      title: 'Collaborate',
      description: 'Connect & collaborate with other community members',
    },
    {
      title: 'Build',
      description: "See how the community is growing and what's ahead.",
    },
  ];

  const shortcutList = [
    {
      title: 'Our Principle',
    },
  ];

  return (
    <Box className="main-container">
      <CenterNavBar />
      <Box px={10} pt={10} className={styles.dashContainer}>
        <SearchEvent onSearchChanged={onSearchChanged} />
        <Box className={styles.cardsWrapper} my={5}>
          {eventCardList.map((item, idx) => (
            <EventCard key={idx} {...item} />
          ))}
        </Box>
        <Title title="shortcuts" />
        <Box className={styles.cardsWrapper} my={5}>
          {shortcutList.map((item, idx) => (
            <ShortcutCard {...item} key={idx} />
          ))}
          <NewShortcutCard />
        </Box>
      </Box>
    </Box>
  );
};
