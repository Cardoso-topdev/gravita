import { FC } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { SortSelector } from 'components/SortSelector';
import { typography } from 'theme/typography';

const options = [
  { value: 'asc', label: 'Asc' },
  { value: 'desc', label: 'Desc' },
];

interface Props {
  count: number;
}

export const ProfileHeader: FC<Props> = ({ count }) => {
  return (
    <Flex justify='space-between'>
      <Heading mb={5} {...typography.h4}>
        Refine and Filter
      </Heading>
      <Text {...typography.h4}>{count} Members</Text>
      <SortSelector options={options} placeholder='Name' />
    </Flex>
  );
};
