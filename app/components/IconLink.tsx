import { FC, FunctionComponent, SVGProps } from 'react';
import { Icon, Link, HStack, Text, IconProps } from '@chakra-ui/react';

interface Props extends IconProps {
  title: string;
  icon: FunctionComponent<SVGProps<SVGAElement>>
}

export const IconLink: FC<Props> = ({ title, icon, ...rest }) => {
  return (
    <Link>
      <HStack>
        <Icon {...rest} as={icon} />
        <Text> {title} </Text>
      </HStack>
    </Link>
  );
};
