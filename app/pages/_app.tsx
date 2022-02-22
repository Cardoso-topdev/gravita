import gqlClient from 'lib/contentful/gqlService';
import { ChakraProvider, extendTheme, typography } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import { Provider } from 'urql';
import { colors } from 'theme/colors';
import { sizes } from 'theme/sizes';
import '../styles/global.css';
import { NavContextProvider } from 'context/NavContext';

const theme = extendTheme({
  colors: colors,
  sizes: sizes,
  typography: typography,
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <NavContextProvider>
          <Provider value={gqlClient}>
            <Component {...pageProps} />
          </Provider>
        </NavContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
