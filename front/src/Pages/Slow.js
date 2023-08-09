import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Videos from "../Components/Videos/Videos";
import Footer from "../Components/Footer/Footer";

const Slow = () => {
  return (
    <>
      <Navbar />
      <Videos 
        route = "/slow"
        heading = "Slow-Vibes"
        cName = "videos-main"
      />
      <Footer />
    </>
  )
}

export default Slow