import { FC } from 'react';
import { VStack, Button, StackProps } from '@chakra-ui/react';
import { Title } from '../Title';
import { Text } from './Text';

interface Props extends StackProps {}

export const Projects: FC<Props> = (props) => (
  <VStack {...props}>
    <Title title="FAVORITE PROJECTS" />
    <Text> Gravita Core</Text>
    <Text> Gravita Identity</Text>
    <Text> Gravita Operate</Text>

    <Button
      alignSelf="flex-start"
      color="teal"
      size="xs"
      variant="link"
    >
      + New Project
    </Button>
  </VStack>
);
