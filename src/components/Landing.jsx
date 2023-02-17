import React from 'react'
import { Container } from '@chakra-ui/react'

import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import LatestProjects from './LatestProjects'
import Contact from './Contact'
import Testimony from './Testimony'
import ImageSlider from './ImageSlider'
import SkillSet from './SkillSet'
import Client from './Client'
import Gallery from './Gallery'
import '../../src/styles.css';


const Landing = () => {
  return ( 
    <>
        <Navbar position="fixed" minW='100%'/>
        <Container pt={100} as="main" maxW='container.full' >
          <About />
          <SkillSet />
          <ImageSlider />
          <Client />
          <Gallery />
          {/* <LatestProjects /> */}
          <Testimony />
          <Contact />
          <Footer />
        </Container>
    </>
  )
}

export default Landing