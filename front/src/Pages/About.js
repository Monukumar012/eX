import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutSection from '../Components/AboutSection/AboutSection.js'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'

const About = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName = "service-hero"
        url = "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        textClass = "service-hero-text"
        heading = "About Us"
        alt="image"
      />
      <AboutSection/>
      <Footer/>

    </>
  )
}

export default About