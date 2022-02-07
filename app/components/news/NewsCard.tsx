import { FC } from 'react';
import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';
import { typography } from 'theme/typography';
import { format } from 'date-fns';

interface Props extends BoxProps {
  title: string;
  content: string;
  createdAt: string;
}

export const NewsCard: FC<Props> = ({ title, content, createdAt, ...rest }) => {
  return (
    <Box bg="secondaryDark" color="white" {...rest}>
      <Text
        color="primaryGray"
        {...typography.titleSM}
        position="relative"
        top={-2}
        left='95%'
      >
        {format(new Date(createdAt), 'MMM d yyyy')}
      </Text>
      <Heading {...typography.heading}>{title}</Heading>
      <Text {...typography.titleSM}> {content} </Text>
    </Box>
  );
};
