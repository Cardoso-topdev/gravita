import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import { Provider } from 'urql';
import gqlClient from 'lib/contentful/gqlService';
import '../styles/global.css';
import { extendTheme } from "@chakra-ui/react"
import MainLayout from 'components/layout/MainLayout';
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
          <MainLayout >
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
