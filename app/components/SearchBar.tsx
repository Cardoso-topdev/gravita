import { ChangeEvent, FC, } from 'react';
import { Input, InputGroup, InputRightAddon, InputGroupProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Props {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  containerStyle?: InputGroupProps;
}

export const SearchBar: FC<Props> = ({ containerStyle, placeholder, onChange }) => {
  return (
    <InputGroup {...containerStyle}>
      <Input placeholder={placeholder} onChange={onChange} />
      <InputRightAddon bg='teal'>
        <SearchIcon color='black' />
      </InputRightAddon>
    </InputGroup>
  );
};
