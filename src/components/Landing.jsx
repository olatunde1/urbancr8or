import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import LatestProjects from './LatestProjects';
import Testimony from './Testimony';
import Contact from './Contact'

const Landing = () => {
  return (
    <>

        <Navbar />
        <About />
        <LatestProjects />
        <Testimony />
        <Contact />
        <Footer />
    </>
  )
}

export default Landing