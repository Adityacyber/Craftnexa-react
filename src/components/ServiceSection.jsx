// import React from "react";
// import { sectionsData } from "../data/ServiceSectionData";

// const ServiceSection = ({ title, subtitle, description, image, reversed }) => {
//   return (
//     <section
//       className={`flex flex-col md:flex-row items-center justify-between gap-20 py-16 px-6 md:px-20 bg-[#0E0E0E] text-white ${
//         reversed ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       {/* Left Text Section */}
//       <div className="md:w-3/5 space-y-7">
//         <h2 className="text-[75px] font-bold font-[syne] leading-[120%] tracking-[1.2px] mb-20">
//           {title}
//         </h2>
//         <h3 className="text-[24px] font-medium font-[rubik] leading-[120%] tracking-[1.2px]">
//           {subtitle}
//         </h3>
//         <p className="text-[18px] font-[rubik] tracking-[1.2px] leading-relaxed">
//           {description}
//         </p>
//       </div>

//       {/* Right Image */}
//       <div className="md:w-2/5 flex justify-center">
//         <img
//           src={image}
//           alt={title}
//           className="rounded-2xl shadow-lg w-full max-h-[544px] object-cover md:max-w-md"
//         />
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;

// src/components/ServicesSection.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "../data/ServiceSectionData";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".service-item");
    const images = servicesData.map((s) => s.image);
    const imageElement = imageRef.current;

    // Animate heading when it enters view
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      }
    );

    // Pin the entire services section
    gsap.to(sections, {
      xPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${sections.length * window.innerHeight}`,
        scrub: true,
        pin: true,
      },
    });

    // Change image as we scroll through each text section
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
          gsap.to(imageElement, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              imageElement.src = images[index];
              gsap.to(imageElement, { opacity: 1, duration: 0.6 });
            },
          });
        },
        onEnterBack: () => {
          gsap.to(imageElement, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              imageElement.src = images[index];
              gsap.to(imageElement, { opacity: 1, duration: 0.6 });
            },
          });
        },
      });
    });
  }, []);

  return (
    <section className="relative w-full bg-[#0E0E0E] text-white overflow-hidden">
      {/* Heading */}
      <div ref={headingRef} className="text-center py-24 md:py-32 px-6 md:px-0">
        <h2 className="text-5xl md:text-6xl font-bold">Our Services</h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Explore how we help brands grow with strategy, creativity, and
          technology.
        </p>
      </div>

      {/* Scrolling Text + Sticky Image Section */}
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row items-start justify-between min-h-screen"
      >
        {/* LEFT: Scrolling Text */}
        <div className="w-full md:w-1/2 px-8 md:px-20 py-32 space-y-[100vh]">
          {servicesData.map((service, i) => (
            <div
              key={i}
              className="service-item min-h-screen flex flex-col justify-center"
            >
              <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
              <h3 className="text-[24px] font-medium font-[rubik] leading-[120%] tracking-[1.2px]">
                {service.subtitle}
              </h3>
              <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky Image */}
        <div className="hidden md:flex w-1/2 justify-center items-center sticky top-0 h-screen">
          <img
            ref={imageRef}
            src={servicesData[0].image}
            alt="Service"
            className="w-[400px] h-[400px] object-contain rounded-2xl shadow-xl transition-all duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
