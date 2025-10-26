import React from "react";
import HeroSection from "../sections/HeroSection";
import TiltedShowcase from "../components/TiltedShowcase";
import Intro from "../components/Intro";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TiltedShowcase />
      <Intro />
      <ServiceSection />
    </div>
  );
};

export default Home;
