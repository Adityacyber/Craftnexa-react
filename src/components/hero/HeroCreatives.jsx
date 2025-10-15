import React from "react";
import Blue from "../../assets/images/Blue.png";
import Beige from "../../assets/images/Beige.png";
import CrystalBlue from "../../assets/images/Crystal-blue.png";
import Hero1 from "../../assets/images/hero1.jpg";

const HeroCreatives = () => {
  return (
    <div>
      <img
        className="w-[221px] h-[221px] object-cover rounded-[20px] -rotate-[20deg] absolute top-6 left-[4%] -z-10"
        src={Blue}
        alt=""
      />
      <img
        className="w-[220px] h-[275px] object-cover rounded-[20px] rotate-[15deg] absolute top-0 right-[6.5%] -z-10"
        src={Beige}
        alt=""
      />
      <img
        className="w-[220px] h-[275px] object-cover rounded-[20px] rotate-[15deg] absolute -bottom-[50%] left-[20%] -z-10"
        src={CrystalBlue}
        alt=""
      />
      <img
        className="w-[221px] h-[221px] object-cover rounded-[20px] -rotate-[13deg] absolute -bottom-[45%] right-[20%] -z-10"
        src={Hero1}
        alt=""
      />
    </div>
  );
};

export default HeroCreatives;
