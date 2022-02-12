import { FC, ChangeEvent } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';

interface Props extends TextareaProps {
  error: string;
  label: string;
  name: string;
  onChange: (e: ChangeEvent) => void;
  labelStyle?: FormLabelProps;
}

export const FormTextarea: FC<Props> = ({
  error,
  label,
  labelStyle,
  onChange,
  name,
  ...rest
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel mt={5} htmlFor={name} fontSize={17} {...labelStyle}>
        {label}
      </FormLabel>
      <Textarea name={name} onChange={onChange} {...rest} />
      <FormErrorMessage> {error} </FormErrorMessage>
    </FormControl>
  );
};
