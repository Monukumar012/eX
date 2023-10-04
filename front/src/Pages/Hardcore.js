import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Videos from "../Components/Videos/Videos";
import Footer from "../Components/Footer/Footer";

const Hardcore = () => {
  return (
    <>
      <Navbar />
      <Videos 
        route = "/hardcore"
        heading = "Hard-Core"
        cName = "videos-main"
        type = "hard"
      />
      <Footer />
    </>
  )
}

export default Hardcore