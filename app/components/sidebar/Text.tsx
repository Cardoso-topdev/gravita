import { FC } from 'react';
import { Text as ChakraText } from '@chakra-ui/react';

const textStyle = {
  fontWeight: 400,
  fontSize: 14,
};

export const Text: FC = (props) => <ChakraText {...textStyle} {...props} />;
