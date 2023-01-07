import React from 'react'
import {ChakraProvider } from '@chakra-ui/react'
import Landing from './components/Landing'
import customTheme from './components/utils/theme';


function App() {

  return (
    
    <ChakraProvider theme={customTheme}>
        <>
          <Landing />
        </>
    </ChakraProvider>
  );
}

export default App;
