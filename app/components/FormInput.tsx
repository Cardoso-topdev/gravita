import { FC, FunctionComponent, SVGProps, ChangeEvent } from 'react';
import {
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  InputProps,
  Icon,
  HStack,
} from '@chakra-ui/react';


interface Props extends InputProps {
  error: string;
  icon?: FunctionComponent<SVGProps<SVGAElement>>;
  label: string;
  labelStyle?: FormLabelProps;
  name: string;
  onChange: (e: ChangeEvent) => void;
}

export const FormInput: FC<Props> = ({
  error,
  label,
  labelStyle,
  icon,
  onChange,
  name,
  ...rest
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel mt={5} htmlFor={name} fontSize={17} {...labelStyle}>
        {label}
      </FormLabel>
      {icon ? (
        <HStack>
          <Icon as={icon} />
          <Input name={name} onChange={onChange} {...rest} color="white" />
        </HStack>
      ) : (
        <Input name={name} onChange={onChange} {...rest} color="white" />
      )}
      <FormErrorMessage> {error} </FormErrorMessage>
    </FormControl>
  );
};
