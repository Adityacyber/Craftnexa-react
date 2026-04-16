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
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { servicesData } from "../data/ServiceSectionData";

// gsap.registerPlugin(ScrollTrigger);

// const ServiceSection = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".service-item");
//     const images = servicesData.map((s) => s.image);
//     const imageElement = imageRef.current;

//     // Animate heading when it enters view
//     gsap.fromTo(
//       headingRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 90%",
//         },
//       }
//     );

//     // Pin the entire services section
//     gsap.to(sections, {
//       xPercent: 0,
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: () => `+=${sections.length * window.innerHeight}`,
//         scrub: true,
//         pin: true,
//       },
//     });

//     // Change image as we scroll through each text section
//     sections.forEach((section, index) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         onEnter: () => {
//           gsap.to(imageElement, {
//             opacity: 0,
//             duration: 0.3,
//             onComplete: () => {
//               imageElement.src = images[index];
//               gsap.to(imageElement, { opacity: 1, duration: 0.6 });
//             },
//           });
//         },
//         onEnterBack: () => {
//           gsap.to(imageElement, {
//             opacity: 0,
//             duration: 0.3,
//             onComplete: () => {
//               imageElement.src = images[index];
//               gsap.to(imageElement, { opacity: 1, duration: 0.6 });
//             },
//           });
//         },
//       });
//     });
//   }, []);

//   return (
//     <section className="relative w-full bg-[#0E0E0E] text-white overflow-hidden">
//       {/* Heading */}
//       <div ref={headingRef} className="text-center py-24 md:py-32 px-6 md:px-0">
//         <h2 className="text-5xl md:text-6xl font-bold">Our Services</h2>
//         <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
//           Explore how we help brands grow with strategy, creativity, and
//           technology.
//         </p>
//       </div>

//       {/* Scrolling Text + Sticky Image Section */}
//       <div
//         ref={containerRef}
//         className="flex flex-col md:flex-row items-start justify-between min-h-screen"
//       >
//         {/* LEFT: Scrolling Text */}
//         <div className="w-full md:w-1/2 px-8 md:px-20 py-32 space-y-[100vh]">
//           {servicesData.map((service, i) => (
//             <div
//               key={i}
//               className="service-item min-h-screen flex flex-col justify-center"
//             >
//               <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
//               <h3 className="text-[24px] font-medium font-[rubik] leading-[120%] tracking-[1.2px]">
//                 {service.subtitle}
//               </h3>
//               <p className="text-lg text-gray-300 max-w-md leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT: Sticky Image */}
//         <div className="hidden md:flex w-1/2 justify-center items-center sticky top-0 h-screen">
//           <img
//             ref={imageRef}
//             src={servicesData[0].image}
//             alt="Service"
//             className="w-[400px] h-[400px] object-contain rounded-2xl shadow-xl transition-all duration-700 ease-out"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;

import { useState } from "react";

const services = [
  {
    label: "SEO",
    title: ["Search Engine", "Optimization"],
    subtitle: "Unlocking Success with SEO: Enhancing Visibility and Reach",
    desc: "In the dynamic realm of digital presence, Search Engine Optimization (SEO) stands tall as a powerful tool driving visibility, traffic, and success for businesses of all sizes. In an ever-expanding online landscape, mastering SEO has become indispensable to staying ahead of the curve and connecting with your target audience effectively.",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
  },
  {
    label: "Social Media",
    title: ["Social Media", "Marketing"],
    subtitle: "Build Your Brand: Engage, Grow & Convert Audiences",
    desc: "Social media marketing empowers businesses to build authentic connections with their audience across platforms. From content strategy to paid campaigns, we craft compelling narratives that drive engagement, grow your following, and turn followers into loyal customers with measurable results.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  },
  {
    label: "PPC Ads",
    title: ["Pay-Per-Click", "Advertising"],
    subtitle: "Precision Targeting: Maximize ROI on Every Click",
    desc: "Our PPC strategies are built on data-driven decisions and continuous optimization. We identify high-intent keywords, craft compelling ad copy, and fine-tune your campaigns to deliver maximum return on every dollar spent — across Google, Meta, and beyond.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    label: "Content",
    title: ["Content", "Marketing"],
    subtitle: "Storytelling That Sells: Authority Through Content",
    desc: "Great content is the foundation of every successful digital strategy. We produce blogs, videos, infographics, and long-form assets that establish your brand as an industry authority, nurture leads through the funnel, and keep your audience coming back for more.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
];

export default function ServiceServices() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <section className="bg-[#111111] min-h-screen py-16 px-6 md:px-12">
      {/* Section label */}
      <p className="text-5xl md:text-6xl font-bold text-center mb-10">
        Our Services
      </p>

      {/* Tab navigation */}
      <div className="flex justify-center flex-wrap gap-2 mb-14">
        {services.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 bg-transparent cursor-pointer
              ${
                active === i
                  ? "border-white text-white"
                  : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/30"
              }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Main panel */}
      <div
        key={active}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        style={{ animation: "fadeUp 0.4s ease both" }}
      >
        {/* Left — text */}
        <div>
          <h2 className="text-6xl font-bold mb-4 text-white leading-none tracking-tight">
            {svc.title[0]}
            <br />
            {svc.title[1]}
          </h2>
          <p className="text-white text-sm font-bold leading-relaxed mb-3">
            {svc.subtitle}
          </p>
          <p className="text-white/50 text-sm leading-7">{svc.desc}</p>
        </div>

        {/* Right — image block */}
        <div
          className="rounded-2xl overflow-hidden bg-[#1a1a1a]"
          style={{ aspectRatio: "4/3" }}
        >
          <img
            src={svc.img}
            alt={svc.label}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.88) saturate(1.05)" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
