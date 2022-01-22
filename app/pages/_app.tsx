import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import { Navbar } from 'components/navbar/Navbar';
import { ColorModeScript } from '@chakra-ui/react'
import '../styles/global.css';


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}
