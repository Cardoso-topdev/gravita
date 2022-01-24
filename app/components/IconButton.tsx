import { FC, FunctionComponent, SVGProps } from 'react';
import { Button, Icon, IconProps } from '@chakra-ui/react';

interface Props extends IconProps {
  icon: FunctionComponent<SVGProps<SVGAElement>>;
}

export const IconButton: FC<Props> = ({ icon, ...rest }) => {
  return (
    <Button variant="ghost" _focus={{ boxShadow: 'none'}}>
      <Icon {...rest} as={icon} />
    </Button>
  );
};
