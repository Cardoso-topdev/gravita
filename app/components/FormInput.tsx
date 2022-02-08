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
  labelColor?: string;
}

export const FormInput: FC<Props> = ({
  error,
  label,
  onChange,
  name,
  labelColor,
  ...rest
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel mt={5} htmlFor={name} color={labelColor} fontSize={17}>
        {label}
      </FormLabel>
      <Input name={name} onChange={onChange} {...rest} color={labelColor} />
      <FormErrorMessage> {error} </FormErrorMessage>
    </FormControl>
  );
};
