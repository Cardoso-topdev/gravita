import { FC, ReactElement } from 'react';
import { Button, IconProps, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  icon: ReactElement<IconProps>;
}

export const IconButton: FC<Props> = ({ icon, ...rest }) => {
  return (
    <Button variant="ghost" {...rest}>
      {icon}
    </Button>
  );
};
