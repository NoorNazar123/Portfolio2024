import React from "react";
import Slider from "react-slick";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiStrapi,
  SiExpress,
  SiFastapi,
  SiTypescript,
} from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const technologies = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    name: "Python",
    icon: <FaPython />,
  },
  {
    id: 6,
    name: "FastAPI",
    icon: <SiFastapi />,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 8,
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 9,
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 10,
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    id: 11,
    name: "Strapi",
    icon: <SiStrapi />,
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="Next technology"
      onClick={onClick}
      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 backdrop-blur transition hover:bg-white/10 hover:text-white"
    >
      <FaArrowRight className="text-xl" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="Previous technology"
      onClick={onClick}
      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 backdrop-blur transition hover:bg-white/10 hover:text-white"
    >
      <FaArrowLeft className="text-xl" />
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function TechnologySlider() {
  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {technologies.map((tech) => (
          <div key={tech.id} className="px-3 py-6">
            <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]">
              <div className="text-center">
                <div className="mb-5 flex justify-center text-6xl text-gray-200">
                  {tech.icon}
                </div>

                <span className="text-lg font-semibold text-gray-300">
                  {tech.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}