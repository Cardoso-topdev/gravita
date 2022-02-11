import { FC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface Props extends TextProps {
  title: string;
}

export const Title: FC<Props> = ({ title, ...rest }) => {
  return (
    <Text color="primaryGray" fontWeight={700} fontSize={12} {...rest}>
      {title.toUpperCase()}
    </Text>
  );
};
