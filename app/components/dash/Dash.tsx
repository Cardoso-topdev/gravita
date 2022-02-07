import { Box, Icon, Text } from '@chakra-ui/react';
import styles from './dash.module.css';
import { SearchEvent } from './SearchEvent';

export const Dash: React.FC = (): JSX.Element => {
  const onSearchChanged = (event) => {
    console.log('onSearchChanged: ', event.target.value);
  }

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
        className={styles.eventCardContainer}
      >
        <Box
          className={styles.eventCardTitleWrapper}
        >
          <Icon
            viewBox='0 0 34 34'
            fill='none'
            color="teal"
            className={styles.eventCardIcon}
          >
            <path d="M11.8478 1.66663L1.6665 7.27063L11.8478 12.8733L22.0278 7.27063L11.8478 1.66663Z" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5705 23.132L11.8478 24.08L1.6665 18.4773V7.27063" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.0278 7.27063V12.8733" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.8478 12.8733V24.08" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.3332 30.6666C27.3833 30.6666 30.6665 27.3834 30.6665 23.3333C30.6665 19.2832 27.3833 15.9999 23.3332 15.9999C19.2831 15.9999 15.9999 19.2832 15.9999 23.3333C15.9999 27.3834 19.2831 30.6666 23.3332 30.6666Z" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.5186 28.5186L32.3332 32.3333" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </Icon>
          <Box
            as='h4'
            className={styles.eventCardTitle}
          >
            Discover
          </Box>
        </Box>
        <Text className={styles.eventCardContent}>Explore a new and better way of building great products!</Text>
      </Box>
    </Box>
  );
}; 
