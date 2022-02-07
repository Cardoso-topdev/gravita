import { FC } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import styles from './dash.module.css';

interface Props {
  onSearchChanged: any;
}

export const SearchEvent: FC<Props> = ({ onSearchChanged }): JSX.Element => {
  return (
    <InputGroup >
      <InputLeftElement
        pointerEvents='none'
        className={styles.inputSearchElement}
      >
        <SearchIcon
          color="gray.500"
          className={styles.inputSearchIcon}
        />
      </InputLeftElement>
      <Input
        type="text"
        pl={12}
        className={styles.inputSearchBox}
        placeholder='What would you like to do?'
        onChange={onSearchChanged}
      />
    </InputGroup>
  );
};
