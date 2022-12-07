import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import LatestProjects from './components/LatestProjects';
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Banner />
      <About />
      <LatestProjects />
    </ChakraProvider>
  );
}

export default App;
