import React, { useState } from "react";
import youtube from "../assets/youtube1.jpg";
import renie from "../assets/renies.jpg";
import graphicWeb from "../assets/graphicdev.jpg";
import NextWeb from "../assets/nextjsweb.jpg";
import portfolio from "../assets/portfolio.webp";
import Button from "../components/Button";
import DynamicTitle from "../components/DynamicTitle";
import { motion } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const ProjectCards = [
    {
      id: 1,
      title: "YouTube Clone",
      description:
        "Developed a YouTube clone in React.js with RapidAPI integration, showcasing frontend development and API integration skills.",
      image: youtube,
      link: "https://zingy-brigadeiros-cf2f51.netlify.app/",
      technology: "React.js",
    },
    {
      id: 2,
      title: "Renie",
      description:
        "Specialized in converting complex Figma designs into React components, ensuring precise attention to design and development principles.",
      image: renie,
      link: "https://www.renie.io/",
      technology: "MERN",
    },
    {
      id: 3,
      title: "Graphic Web",
      description:
        "Developed a static website for a client using HTML, CSS, and JavaScript, with GSAP for engaging animations.",
      image: graphicWeb,
      link: "https://symphonious-marzipan-f6b121.netlify.app/",
      technology: "Vanilla JS",
    },
    {
      id: 4,
      title: "Next.js Web App",
      description:
        "Created a static web application with Next.js using basic knowledge and the Aceternity UI framework.",
      image: NextWeb,
      link: "https://nextjs-with-aceternity-ui-git-main-noor-nazars-projects.vercel.app/",
      technology: "Next.js",
    },
    {
      id: 5,
      title: "Portfolio",
      description:
        "Developed A personal portfolio  static website using HTML, CSS, and JavaScript.",
      image: portfolio,
      link: "https://comforting-concha-965fde.netlify.app/",
      technology: "MERN",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? ProjectCards
      : ProjectCards.filter((project) => project.technology === filter);

  return (
    <motion.div
      className="layout min-h-screen p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DynamicTitle title="Projects" />
      <motion.section
        className="text-center my-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[45px] font-bold mb-4 text-gray-800">
          Highlighted Projects ({filteredProjects.length})
        </h2>
        <p className="text-lg text-gray-800">
          Explore my key projects that showcase my skills in web development,
          including <br /> YouTube clone and more.
        </p>
      </motion.section>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap space-x-4 my-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          className="px-4 py-2 duration-500 shadow-md rounded-md hover:rounded-xl hover:text-gray-500"
          onClick={() => setFilter("All")}
          label="All"
        />

        <Button
          className="px-4 py-2 duration-500 shadow-md rounded-md hover:rounded-xl hover:text-gray-500 my-2"
          onClick={() => setFilter("React.js")}
          label="React.js"
        />
        <Button
          className="px-4 py-2 duration-500 shadow-md rounded-md hover:rounded-xl hover:text-gray-500 my-2"
          onClick={() => setFilter("Next.js")}
          label="Next.js"
        />
        <Button
          className="px-4 py-2 duration-500 shadow-md rounded-md hover:rounded-xl hover:text-gray-500 my-2"
          onClick={() => setFilter("MERN")}
          label="MERN"
        />
        <Button
          className="px-4 py-2 duration-500 shadow-md rounded-md hover:rounded-xl hover:text-gray-500 my-2"
          onClick={() => setFilter("Vanilla JS")}
          label="Vanilla JS"
        />
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className=" shadow-md hover:shadow-multi-color hover:scale-110 duration-300 rounded-md overflow-hidden"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className=" overflow-hidden">
                <img
                  className="w-full h-[250px] scale-100 hover:scale-125 duration-500 object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-4 ">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
