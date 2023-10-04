import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Videos from "../Components/Videos/Videos";
import Footer from "../Components/Footer/Footer";

const Customize = () => {
  return (
    <>
      <Navbar />
      <Videos 
        route = "/customize"
        heading = "Melodious"
        cName = "videos-main"
        type = "melodious"
      />
      <Footer />
    </>
  )
}

export default Customize