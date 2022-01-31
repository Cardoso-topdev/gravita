import { FC } from 'react';
import { VStack, Button, StackProps } from '@chakra-ui/react';
import { colors } from 'theme/colors';
import { sizes } from 'theme/sizes';
import { Title } from './Title';
import { Text } from './Text';

interface Props extends StackProps {}

export const Teams: FC<Props> = (props) => (
  <VStack {...props}>
    <Title title="TEAMS" />
    <Text> Gravita Core</Text>
    <Button
      alignSelf="flex-start"
      color={colors.teal}
      size={sizes.xs}
      variant="link"
    >
      + New Team
    </Button>
  </VStack>
);
