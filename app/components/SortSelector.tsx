import { FC } from 'react';
import { HStack, Select, Text, StackProps } from '@chakra-ui/react';

type Option = {
  value: string;
  label: string;
};

interface Props {
  options: Option[];
  placeholder: string;
  containerStyle?: StackProps;
}

export const SortSelector: FC<Props> = ({
  options,
  placeholder,
  containerStyle,
}) => {
  return (
    <HStack alignSelf='flex-start' {...containerStyle}>
      <Text fontSize={14}>Sort by:</Text>
      <Select
        fontSize={14}
        fontWeight={700}
        placeholder={placeholder}
        variant="unstyled"
        w={100}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </HStack>
  );
};
