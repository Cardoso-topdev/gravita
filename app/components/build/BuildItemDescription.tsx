import { FC } from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';
import { typography } from "theme/typography";
import styles from './styles.module.css';

interface Props {
  visibility: boolean;
  position: string;
  itemDescription: {
    title: string;
    description: string;
    memberCnt: number;
    investmentDate: string;
    investmentNeeded: string;
    openRolesToFill: string;
  };
}

export const BuildItemDescription: FC<Props> = ({ visibility, itemDescription, position }): JSX.Element => {
  return (
    <Box
      className={styles.identityDescriptionContainer}
      display={visibility ? 'block' : 'none'}
    >
      <Box className={styles.identityDescription + ' ' + (position === 'right' && styles.descriptionRight) + ' ' + (position === 'left' && styles.descriptionLeft) + ' ' + (position === 'top' && styles.descriptionTop)} bg='gray.700'>
        <Text {...typography.LargeBold} pb={'9px'}>
          {itemDescription.title}
        </Text>
        <Text pb={'5px'}>{itemDescription.description}</Text>
        <Text {...typography.xSmallBold} color='primaryGrey'>
          MEMBERS
        </Text>
        <Box>
          <Box>
            <Avatar
              left={'100px'}
              w='30px'
              h='30px'
              name='Dan Abrahmov'
              className={styles.userAvatar}
              src='https://bit.ly/dan-abramov'
            />
            <Avatar
              left={'80px'}
              w='30px'
              h='30px'
              name='Dan Abrahmov'
              className={styles.userAvatar}
              src='https://bit.ly/dan-abramov'
            />
            <Avatar
              left={'60px'}
              w='30px'
              h='30px'
              name='Dan Abrahmov'
              className={styles.userAvatar}
              src='https://bit.ly/dan-abramov'
            />
            <Avatar
              left={'40px'}
              w='30px'
              h='30px'
              name='Dan Abrahmov'
              className={styles.userAvatar}
              src='https://bit.ly/dan-abramov'
            />
            <Avatar
              w='30px'
              h='30px'
              name='Dan Abrahmov'
              className={styles.userAvatar}
              src='https://bit.ly/dan-abramov'
            />
          </Box>
          <Text {...typography.xSmallRegular} className={styles.membersCnt}>
            {'+' + (itemDescription.memberCnt - 5) + 'members'}
          </Text>
        </Box>
        <Text {...typography.xSmallBold} color='primaryGrey'>
          INVESTMENT TO DATE
        </Text>
        <Text {...typography.RegularBold} mb={2}>
          {itemDescription.investmentDate}
        </Text>
        <Text {...typography.xSmallBold} color='primaryGrey'>
          INVESTMENT NEEDED
        </Text>
        <Text {...typography.RegularBold} mb={2}>
          {itemDescription.investmentNeeded}
        </Text>
        <Text {...typography.xSmallBold} color='primaryGrey'>
          OPEN ROLES TO FILL
        </Text>
        <Text {...typography.SmallRegular} mb={2} whiteSpace='pre-line'>
          {itemDescription.openRolesToFill}
        </Text>
      </Box>
    </Box>
  );
};
