import React from 'react'
import { Container } from '@chakra-ui/react'
// import NavBar from './NavBar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Testimony from './Testimony'
// import ImageSlider from './ImageSlider'
import SkillSet from './SkillSet'
// import Client from './Client'
import Gallery from './Gallery'
import Product from './Product'
// import Data from './Data'
import '../../src/styles.css';


const Landing = () => {
  return ( 
    <>
        {/* <NavBar position="fixed" minW='100%'/> */}
        <Container pt={100} as="main" maxW='container.full' >
          <About />
          <SkillSet />
          {/* <Client /> */}
          {/* <ImageSlider /> */}
          {/* <Data /> */}
          <Product />
          <Gallery />
          <Testimony />
          <Contact />
          <Footer />
        </Container>
    </>
  )
}

export default Landing