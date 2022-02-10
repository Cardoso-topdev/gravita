import { forwardRef, FunctionComponent, SVGProps } from 'react';
import { Icon, Link, HStack, Text, IconProps } from '@chakra-ui/react';
interface Props extends IconProps {
  title: string;
  icon: FunctionComponent<SVGProps<SVGAElement>>;
}

type Ref = HTMLAnchorElement;

// eslint-disable-next-line react/display-name
export const IconLink = forwardRef<Ref, Props>(
  ({ icon, title, ...rest }, ref) => (
    <Link ref={ref}>
      <HStack>
        <Icon {...rest} as={icon} />
        <Text> {title} </Text>
      </HStack>
    </Link>
  ),
);
