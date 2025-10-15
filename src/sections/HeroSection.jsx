import React from "react";
import HeroContent from "../components/hero/HeroContent";
import HeroCreatives from "../components/hero/HeroCreatives";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mt-8">
      <HeroContent />
      <HeroCreatives />
    </div>
  );
};

export default HeroSection;
