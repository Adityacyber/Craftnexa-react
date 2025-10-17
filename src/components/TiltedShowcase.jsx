import React from "react";
import Img1a from "../assets/images/1a.png";
import Img2a from "../assets/images/2a.png";
import Img3a from "../assets/images/3a.png";
import Img4a from "../assets/images/4a.png";
import Img1b from "../assets/images/1b.png";
import Img2b from "../assets/images/2b.png";
import Img3b from "../assets/images/3b.png";
import Img4b from "../assets/images/4b.png";
import Img5b from "../assets/images/5b.png";

const topRow = [Img1a, Img2a, Img3a, Img4a];
const bottomRow = [Img1b, Img2b, Img3b, Img4b, Img5b];

const TiltedShowcase = () => {
  return (
    <section className="py-36 overflow-hidden">
      <div className="flex flex-col items-center gap-5">
        {/* TOP ROW */}
        <div
          className="flex gap-6"
          style={{
            transform: "rotateX(55deg) rotateZ(20deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {topRow.map((src, index) => (
            <div
              key={index}
              className="w-[406px] h-[274px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={src}
                alt={`top-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div
          className="flex gap-6 mt-[-100px]" // slightly overlapping for diagonal effect
          style={{
            transform: "rotateX(55deg) rotateZ(20deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {bottomRow.map((src, index) => (
            <div
              key={index}
              className="w-[406px] h-[274px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={src}
                alt={`bottom-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiltedShowcase;
