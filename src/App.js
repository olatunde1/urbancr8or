import React from 'react'
import {ChakraProvider } from '@chakra-ui/react'
import Landing from './components/Landing';
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    
    <ChakraProvider>
        <>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </>
    </ChakraProvider>
  );
}

export default App;
