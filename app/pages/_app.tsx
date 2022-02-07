import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import { Provider } from 'urql';
import gqlClient from 'lib/contentful/gqlService';
import { extendTheme } from "@chakra-ui/react"
import { colors } from 'theme/colors';
import { sizes } from 'theme/sizes';
import { typography } from '@chakra-ui/react';
import '../styles/global.css';

const theme = extendTheme({
	colors: colors,
  sizes: sizes,
  typography: typography
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Provider value={gqlClient}>
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
