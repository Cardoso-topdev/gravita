import { FC, ChangeEvent } from 'react';
import {
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps,
} from '@chakra-ui/react';

interface Props extends InputProps {
  error: string;
  label: string;
  name: string;
  onChange: (e: ChangeEvent) => void;
}

export const FormInput: FC<Props> = ({
  error,
  label,
  onChange,
  name,
  ...rest
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel mt={5} htmlFor={name}>{label}</FormLabel>
      <Input name={name} onChange={onChange} {...rest} />
      <FormErrorMessage> {error} </FormErrorMessage>
    </FormControl>
  );
};
