import { FC } from 'react';
import {
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Props extends InputProps {
  placeholder: string;
}

export const SearchBar: FC<Props> = ({ placeholder, ...rest }) => {
  return (
    <InputGroup {...rest}>
      <Input placeholder={placeholder} />
      <InputRightAddon bg='teal'>
        <SearchIcon color='black' />
      </InputRightAddon>
    </InputGroup>
  );
};
