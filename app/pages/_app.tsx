import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import { Navbar } from 'components/navbar/Navbar';
import { Provider } from 'urql';
import gqlClient from 'lib/contentful/gqlService';
import '../styles/global.css';
import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
	colors: {
		gray: {
			800: "#171822",
		},
	}
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Provider value={gqlClient}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
