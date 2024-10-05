import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiStrapi,
  SiExpress,
  SiSaucelabs,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Technology list
const technologies = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  {
    id: 2,
    name: "Strapi",
    icon: <SiStrapi className="text-purple-500 " />,
  },
  {
    id: 3,
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-800 " />,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500 translate-x-[1.30rem]" />,
  },
  {
    id: 5,
    name: "React.js",
    icon: <FaReact className="text-blue-500 translate-x-[1rem]" />,
  },
  {
    id: 6,
    name: "Express.js",
    icon: <SiExpress className="text-black translate-x-[1rem]" />,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-400 translate-x-[2rem]" />,
  },
  { id: 8, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 9, name: "GSAP", icon: <SiSaucelabs className="text-green-500" /> },
];

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
      <FaArrowRight className="text-4xl text-green-500" onClick={onClick} />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-[1]">
      <FaArrowLeft className="text-4xl text-green-500" onClick={onClick} />
    </div>
  );
};

// Slider settings
const settings = {
  dots: true, // Enable dots
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default to showing 3 slides
  slidesToScroll: 1,
  nextArrow: <NextArrow />, // Pass custom next arrow
  prevArrow: <PrevArrow />, // Pass custom previous arrow
  responsive: [
    {
      breakpoint: 768, // For screens 768px or smaller (mobile and tablet)
      settings: {
        slidesToShow: 1, // Show only 1 slide on mobile
        slidesToScroll: 1,
      },
    },
  ],
};

export default function TechnologySlider() {
  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {technologies.map((tech) => (
          <div key={tech.id} className="pl-8 md:pl-12">
            <div className="w-[280px] flex items-center justify-center bg-[#f8f8f8] border rounded-lg shadow-lg py-[80px]">
              <div className="text-center">
                <span className="text-6xl block mb-4">{tech.icon}</span>
                <span className=" font-semibold text-xl">{tech.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
