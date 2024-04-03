import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Technicians from "../Components/Technicians";
import Footer from "../Components/Footer";
import InfoExtra from "../Components/InfoExtra";

function Home() {
  
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <InfoExtra />
      <Info />
      <About />
      <Reviews />
      <Technicians />
      <Footer />
    </div>
  );
}

export default Home;
