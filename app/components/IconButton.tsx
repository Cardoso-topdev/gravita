import { FC, FunctionComponent, SVGProps } from 'react';
import { Icon, Button, IconProps } from '@chakra-ui/react';

interface Props extends IconProps {
  icon: FunctionComponent<SVGProps<SVGAElement>>;
}

export const IconButton: FC<Props> = ({ icon, ...rest }) => {
  return (
    <Button variant="ghost">
      <Icon {...rest} as={icon} />
    </Button>
  );
};
