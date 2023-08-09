import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import Videos from "../Components/Videos/Videos";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="home-hero"
        url="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        textClass="home-hero-text"
        heading="Default roads lead to beautiful destination"
        // para="Join the Virtual Internship Program in emerging technologies with edunexX"
        // // btnText="Apply Now"
        // // btnClass="home-hero-btn"
        // alt="image"
      />
      <Videos
        route = "/"
        heading = "Latest"
        cName = "videos-main"
      />
      <Footer />
    </>
  );
};

export default Home;
