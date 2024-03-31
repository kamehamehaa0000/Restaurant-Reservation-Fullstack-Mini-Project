import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Reservation from './Reservation'
import About from './About'

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Reservation />
    </>
  )
}

export default HeroSection
