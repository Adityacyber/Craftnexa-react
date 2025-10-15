import React from "react";

const HeroContent = () => {
  return (
    <div className="max-w-[80vw] flex flex-col items-center">
      <h1 className="font-[syne] font-bold text-[8vw] leading-[7.5vw] text-center">
        Creative Digital Agency
      </h1>
      <p className="font-[rubik] text-[20px] max-w-[522px] text-center mt-8 mb-14 tracking-[2px]">
        Crafting Compelling Brand Narratives Through Digital Mastery And Design.
      </p>
      <button className="py-2 px-11 bg-[#FFC000] rounded-[60px] text-black">
        Contact Us
      </button>
    </div>
  );
};

export default HeroContent;
