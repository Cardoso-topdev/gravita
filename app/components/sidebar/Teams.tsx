import { FC } from 'react';
import { VStack, Button, StackProps } from '@chakra-ui/react';
import { Title } from './Title';
import { Text } from './Text';

interface Props extends StackProps {}

export const Teams: FC<Props> = (props) => (
  <VStack {...props}>
    <Title title="TEAMS" />
    <Text> Gravita Core</Text>
    <Button
      alignSelf="flex-start"
      color="teal"
      size="xs"
      variant="link"
    >
      + New Team
    </Button>
  </VStack>
);
