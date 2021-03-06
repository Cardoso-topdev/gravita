import { FC } from 'react';
import styles from './dash.module.css';
import { Box, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  path: string;
}

const iconObject = {
  Discover: (
    <Icon
      viewBox="0 0 34 34"
      fill="none"
      color="teal"
      className={styles.eventCardIcon}
    >
      <path
        d="M11.8478 1.66663L1.6665 7.27063L11.8478 12.8733L22.0278 7.27063L11.8478 1.66663Z"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5705 23.132L11.8478 24.08L1.6665 18.4773V7.27063"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0278 7.27063V12.8733"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8478 12.8733V24.08"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3332 30.6666C27.3833 30.6666 30.6665 27.3834 30.6665 23.3333C30.6665 19.2832 27.3833 15.9999 23.3332 15.9999C19.2831 15.9999 15.9999 19.2832 15.9999 23.3333C15.9999 27.3834 19.2831 30.6666 23.3332 30.6666Z"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.5186 28.5186L32.3332 32.3333"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  ),
  Collaborate: (
    <Icon
      viewBox="0 0 34 34"
      fill="none"
      color="teal"
      className={styles.eventCardIcon}
    >
      <path
        d="M16.3332 1H6.99984C4.05432 1 1.6665 3.38781 1.6665 6.33333V15.6667C1.6665 18.6122 4.05432 21 6.99984 21H16.3332C19.2787 21 21.6665 18.6122 21.6665 15.6667V6.33333C21.6665 3.38781 19.2787 1 16.3332 1Z"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.1772 19.3547C20.0718 18.6785 19.8707 18.0208 19.5799 17.4014C19.0466 16.3347 16.8292 15.6014 14.0425 14.5707C13.2892 14.2907 13.4132 12.324 13.7466 11.956C14.2778 11.3803 14.6813 10.6987 14.9306 9.95603C15.18 9.21336 15.2694 8.42637 15.1932 7.64669C15.241 7.1501 15.1859 6.64899 15.0316 6.1746C14.8772 5.7002 14.6268 5.26268 14.2959 4.88929C13.9651 4.51591 13.5609 4.21466 13.1085 4.00432C12.6561 3.79397 12.1653 3.67904 11.6665 3.66669C11.1678 3.67904 10.677 3.79397 10.2246 4.00432C9.77224 4.21466 9.36804 4.51591 9.03718 4.88929C8.70632 5.26268 8.45591 5.7002 8.30153 6.1746C8.14716 6.64899 8.09213 7.1501 8.13988 7.64669C8.06366 8.42637 8.15314 9.21336 8.40246 9.95603C8.65178 10.6987 9.0553 11.3803 9.58655 11.956C9.91988 12.324 10.0439 14.2907 9.29055 14.5707C6.50388 15.6014 4.28522 16.3334 3.75322 17.4C3.46239 18.0195 3.26126 18.6772 3.15588 19.3534"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.9999 20.8093C24.1412 20.5147 25.1527 19.8502 25.8764 18.9198C26.6001 17.9894 26.9952 16.8454 26.9999 15.6667V6.33334C26.9938 5.15497 26.5982 4.01168 25.8748 3.08153C25.1513 2.15137 24.1405 1.48658 22.9999 1.19067"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3331 20.8093C29.4744 20.5147 30.486 19.8502 31.2097 18.9198C31.9333 17.9894 32.3284 16.8454 32.3331 15.6667V6.33334C32.3271 5.15497 31.9315 4.01168 31.208 3.08153C30.4845 2.15137 29.4738 1.48658 28.3331 1.19067"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  ),
  Build: (
    <Icon
      viewBox="0 0 34 34"
      fill="none"
      color="teal"
      className={styles.eventCardIcon}
    >
      <path
        d="M12.9999 11.6666C12.9999 12.1971 13.4213 12.7058 14.1715 13.0808C14.9216 13.4559 15.939 13.6666 16.9999 13.6666C18.0607 13.6666 19.0782 13.4559 19.8283 13.0808C20.5785 12.7058 20.9999 12.1971 20.9999 11.6666C20.9999 11.1362 20.5785 10.6275 19.8283 10.2524C19.0782 9.87734 18.0607 9.66663 16.9999 9.66663C15.939 9.66663 14.9216 9.87734 14.1715 10.2524C13.4213 10.6275 12.9999 11.1362 12.9999 11.6666Z"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9999 3.66663C12.9999 4.19706 13.4213 4.70577 14.1715 5.08084C14.9216 5.45591 15.939 5.66663 16.9999 5.66663C18.0607 5.66663 19.0782 5.45591 19.8283 5.08084C20.5785 4.70577 20.9999 4.19706 20.9999 3.66663C20.9999 3.13619 20.5785 2.62749 19.8283 2.25241C19.0782 1.87734 18.0607 1.66663 16.9999 1.66663C15.939 1.66663 14.9216 1.87734 14.1715 2.25241C13.4213 2.62749 12.9999 3.13619 12.9999 3.66663V3.66663Z"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3331 7.66663C22.3331 8.19706 22.7546 8.70577 23.5047 9.08084C24.2548 9.45591 25.2723 9.66663 26.3331 9.66663C27.394 9.66663 28.4114 9.45591 29.1616 9.08084C29.9117 8.70577 30.3331 8.19706 30.3331 7.66663C30.3331 7.13619 29.9117 6.62749 29.1616 6.25241C28.4114 5.87734 27.394 5.66663 26.3331 5.66663C25.2723 5.66663 24.2548 5.87734 23.5047 6.25241C22.7546 6.62749 22.3331 7.13619 22.3331 7.66663V7.66663Z"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.33313 7.66663C4.33313 7.92927 4.43659 8.18934 4.63761 8.43199C4.83863 8.67464 5.13327 8.89512 5.5047 9.08084C5.87614 9.26656 6.31709 9.41388 6.8024 9.51439C7.2877 9.6149 7.80784 9.66663 8.33313 9.66663C8.85842 9.66663 9.37856 9.6149 9.86386 9.51439C10.3492 9.41388 10.7901 9.26656 11.1616 9.08084C11.533 8.89512 11.8276 8.67464 12.0286 8.43199C12.2297 8.18934 12.3331 7.92927 12.3331 7.66663C12.3331 7.40398 12.2297 7.14391 12.0286 6.90126C11.8276 6.65861 11.533 6.43813 11.1616 6.25241C10.7901 6.0667 10.3492 5.91938 9.86386 5.81887C9.37856 5.71836 8.85842 5.66663 8.33313 5.66663C7.80784 5.66663 7.2877 5.71836 6.8024 5.81887C6.31709 5.91938 5.87614 6.0667 5.5047 6.25241C5.13327 6.43813 4.83863 6.65861 4.63761 6.90126C4.43659 7.14391 4.33313 7.40398 4.33313 7.66663V7.66663Z"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9825 4.97864L11.1091 6.22797"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2585 6.38796L20.0145 4.97729"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.0985 8.84131L2.4665 9.98531C2.22863 10.0891 2.02622 10.2601 1.88411 10.4773C1.74201 10.6945 1.66638 10.9484 1.6665 11.208V20.1413C1.66657 20.3972 1.74028 20.6477 1.87883 20.8628C2.01737 21.078 2.2149 21.2487 2.44784 21.3546L15.7998 27.4266C15.9669 27.5028 16.1478 27.5437 16.3314 27.5466C16.5149 27.5496 16.6971 27.5147 16.8665 27.444L31.5105 21.3413C31.7534 21.24 31.9608 21.0691 32.1068 20.8501C32.2527 20.6311 32.3305 20.3738 32.3305 20.1106V11.208C32.3306 10.9484 32.255 10.6945 32.1129 10.4773C31.9708 10.2601 31.7684 10.0891 31.5305 9.98531L29.2665 8.99998"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3331 16.9999V27.5439"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.0865 10.436L16.3331 17"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3332 17L1.90784 10.4426"
        stroke="#A2E0D9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  ),
};

export const EventCard: FC<Props> = ({ title, description, path }): JSX.Element => {
  return (
    <Link href={path} passHref>
      <Box className={styles.eventCardContainer} my={3} mx={1}>
        <Box className={styles.eventCardTitleWrapper}>
          {iconObject[title]}
          <Box as="h4" className={styles.eventCardTitle}>
            {title}
          </Box>
        </Box>
        <Text className={styles.eventCardContent}>{description}</Text>
      </Box>
    </Link>
  );
};
