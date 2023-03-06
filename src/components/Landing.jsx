import React from 'react'
import { Container } from '@chakra-ui/react'
// import NavBar from './NavBar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Testimony from './Testimony'
import SkillSet from './SkillSet'
// import Gallery from './Gallery'
import Product from './Product'
import '../../src/styles.css';


const Landing = () => {
  return ( 
    <>
        {/* <NavBar position="fixed" minW='100%'/> */}
        
          <About />
          <SkillSet />
          <Gallery />
          <Product />
          <Testimony />
          <Contact />

          <Footer />
       
    </>
  )
}

export default Landing