import React from "react";
import HeroSection from "../sections/HeroSection";
import TiltedShowcase from "../components/TiltedShowcase";
import Intro from "../components/Intro";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import TestimonialsSection from "../components/TestimonialsSection";
import MeetSection from "../components/MeetSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TiltedShowcase />
      <Intro />
      <ServiceSection />
      <ProjectSection />
      <TestimonialsSection />
      <MeetSection />
    </div>
  );
};

export default Home;
