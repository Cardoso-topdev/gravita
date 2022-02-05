import { SearchIcon } from '@chakra-ui/icons';
import { Box, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import styles from './components.module.css';

export const Dash: React.FC = (): JSX.Element => {
  const onSearchChanged = (event) => {
    console.log('onSearchChanged: ', event.target.value);
  }

  return (
    <Box
      className={styles.dashContainer}
    >
      {/* <Text>DashBoard</Text> */}
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
          className={styles.inputSearchBox}
          placeholder='What would you like to do?'
          onChange={onSearchChanged}
        />
      </InputGroup>
      <Box>
        <Box>
          <Icon
            viewBox='0 0 34 34'
            fill='none'
            color="teal"
          >
            <path d="M11.8478 1.66663L1.6665 7.27063L11.8478 12.8733L22.0278 7.27063L11.8478 1.66663Z" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5705 23.132L11.8478 24.08L1.6665 18.4773V7.27063" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.0278 7.27063V12.8733" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.8478 12.8733V24.08" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.3332 30.6666C27.3833 30.6666 30.6665 27.3834 30.6665 23.3333C30.6665 19.2832 27.3833 15.9999 23.3332 15.9999C19.2831 15.9999 15.9999 19.2832 15.9999 23.3333C15.9999 27.3834 19.2831 30.6666 23.3332 30.6666Z" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.5186 28.5186L32.3332 32.3333" stroke="#A2E0D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};
