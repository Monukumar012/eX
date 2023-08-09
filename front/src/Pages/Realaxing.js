import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Videos from "../Components/Videos/Videos";
import Footer from "../Components/Footer/Footer";

const Realaxing = () => {
  return (
    <>
      <Navbar />
      <Videos 
        route = "/relaxing"
        heading = "Relaxing"
        cName = "videos-main"
      />
      <Footer />
    </>
  )
}

export default Realaxing