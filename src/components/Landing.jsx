import React from 'react'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Testimony from './Testimony'
import SkillSet from './SkillSet'
import Gallery from './Gallery'
import NavBar from './NavigationBar'
import Product from './Product'
import '../../src/styles.css';



const Landing = () => {
  return ( 
    <>
        <NavBar />
  
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