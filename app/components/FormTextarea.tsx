import { FC, ChangeEvent } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';

interface Props extends TextareaProps {
  error: string;
  label: string;
  labelColor?: string;
  name: string;
  onChange: (e: ChangeEvent) => void;
}

export const FormTextarea: FC<Props> = ({
  error,
  label,
  labelColor,
  onChange,
  name,
  ...rest
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel mt={5} htmlFor={name} color={labelColor} fontSize={17}>
        {label}
      </FormLabel>
      <Textarea name={name} onChange={onChange} {...rest} color="white" />
      <FormErrorMessage> {error} </FormErrorMessage>
    </FormControl>
  );
};
