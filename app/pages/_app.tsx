import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import { Navbar } from 'components/navbar/Navbar';
import { Provider } from 'urql';
import gqlClient from 'lib/contentful/gqlService';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Provider value={gqlClient}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
