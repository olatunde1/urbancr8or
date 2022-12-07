import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Banner />
      <About />
    </ChakraProvider>
  );
}

export default App;
