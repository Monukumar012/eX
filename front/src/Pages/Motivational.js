import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Videos from "../Components/Videos/Videos";
import Footer from "../Components/Footer/Footer";

const Motivational = () => {
  return (
    <>
      <Navbar />
      <Videos 
        route = "/motivational"
        heading = "Motivational"
        cName = "videos-main"
      />
      <Footer />
    </>
  );
};

export default Motivational;
