import { FC } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { SortSelector } from 'components/SortSelector';
import { typography } from 'theme/typography';

const options = [{ value: 'asc', label: 'Ascending' }];

export const ProfileHeader: FC = () => {
  return (
    <Flex justify='space-between'>
      <Heading mb={5} {...typography.h4}>
        Refine and Filter
      </Heading>
      <SortSelector options={options} placeholder="Order" />
    </Flex>
  );
};
