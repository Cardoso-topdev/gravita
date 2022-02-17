import { FC } from 'react';
import {
  Heading,
  Divider,
  Flex,
  Text,
  VStack,
  StackProps,
} from '@chakra-ui/react';
import { typography } from 'theme/typography';

interface Props extends StackProps {}

export const ProfileStats: FC<Props> = (props) => {
  return (
    <VStack {...props} pr={5}>
      <Heading alignSelf='flex-start' mb={2} {...typography.h4}>
        Refine and Filter
      </Heading>
      <VStack w='100%' alignSelf='flex-start'>
        <Flex w='100%' justify='space-between'>
          <Text {...typography.h4}> All </Text>
          <Text> 500 </Text>
        </Flex>
        <Flex w='100%' justify='space-between'>
          <Text {...typography.h4}> Talents </Text>
          <Text> 300 </Text>
        </Flex>
        <Flex w='100%' justify='space-between'>
          <Text {...typography.h4}> Businesses </Text>
          <Text> 100 </Text>
        </Flex>
        <Flex w='100%' justify='space-between'>
          <Text {...typography.h4}> Rooms </Text>
          <Text> 100 </Text>
        </Flex>
      </VStack>
      <Divider />
    </VStack>
  );
};
