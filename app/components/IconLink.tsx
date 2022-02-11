import { forwardRef, FunctionComponent, SVGProps } from 'react';
import { Icon, HStack, Text, IconProps, StackProps } from '@chakra-ui/react';
interface Props {
  title: string;
  icon: FunctionComponent<SVGProps<SVGAElement>>;
  iconStyle?: IconProps;
  href?: string;
  onClick?: () => void;
  stackStyle?: StackProps;
}

type Ref = HTMLDivElement | any;

// eslint-disable-next-line react/display-name
export const IconLink = forwardRef<Ref, Props>(
  ({ icon, iconStyle, href, onClick, title }, ref) => (
    <HStack as="a" href={href} onClick={onClick} ref={ref} spacing={5}>
      <Icon as={icon} {...iconStyle} />
      <Text> {title} </Text>
    </HStack>
  ),
);
