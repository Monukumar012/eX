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
        heading = "Customize"
        cName = "videos-main"
      />
      <Footer />
    </>
  )
}

export default Customize