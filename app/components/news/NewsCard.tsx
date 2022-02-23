import { FC } from 'react';
import { BoxProps, Flex, Heading, Text } from '@chakra-ui/react';
import { typography } from 'theme/typography';
import { format } from 'date-fns';

interface Props extends BoxProps {
  title: string;
  content: string;
  createdAt: string;
}

export const NewsCard: FC<Props> = ({ title, content, createdAt, ...rest }) => {
  return (
    <Flex bg="secondaryDark" color="white" flexDir="column" {...rest}>
      <Text alignSelf="flex-end" color="primaryGray" {...typography.paragraph}>
        {format(new Date(createdAt), 'MMM d yyyy')}
      </Text>
      <Heading {...typography.heading}>{title}</Heading>
      <Text {...typography.paragraph}> {content} </Text>
    </Flex>
  );
};
