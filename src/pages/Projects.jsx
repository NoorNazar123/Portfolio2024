import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import youtube from "../assets/youtube1.jpg";
import renie from "../assets/renies.jpg";
import graphicWeb from "../assets/lobstr.png";
import NextWeb from "../assets/nextjsweb.jpg";
import portfolio from "../assets/portfolio.webp";
import teamHub from "../assets/team-hub.png";

import DynamicTitle from "../components/DynamicTitle";
import Button from "../components/Button";

const projects = [
  {
    id: 1,
    title: "Team Hub",
    category: "Full Stack + AI",
    description:
      "A full-stack team management application built with React, FastAPI, PostgreSQL, JWT authentication, Cloudinary, and Gemini AI.",
    image: teamHub,
    liveUrl: "https://engineering-notes-ten.vercel.app/",
    githubUrl:
      "https://github.com/NoorNazar123/engineering-notes/tree/main/front-mini-app",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "JWT",
      "Cloudinary",
      "Gemini AI",
    ],
  },
  {
    id: 2,
    title: "Renie",
    category: "Professional Work",
    description:
      "A professional frontend project focused on translating Figma designs into responsive React interfaces with attention to detail and performance.",
    image: renie,
    liveUrl: "https://www.renie.io/",
    technologies: ["React", "Tailwind CSS", "Figma", "REST API"],
  },
  {
    id: 3,
    title: "Lobstr",
    category: "Professional Work",
    description:
      "A professional web project focused on building and maintaining a modern responsive frontend experience with attention to usability, clean UI, and performance.",
    image: graphicWeb,
    liveUrl: "https://www.lobstr.io/",
    technologies: ["React", "Frontend", "Responsive UI"],
  },
  {
    id: 4,
    title: "Next.js Web App",
    category: "Frontend",
    description:
      "A modern frontend experiment built with Next.js and Aceternity UI, focused on component-based development and modern interface design.",
    image: NextWeb,
    liveUrl:
      "https://nextjs-with-aceternity-ui-git-main-noor-nazars-projects.vercel.app/",
    technologies: ["Next.js", "React", "Aceternity UI"],
  },
  {
    id: 5,
    title: "YouTube Clone",
    category: "Frontend",
    description:
      "A React-based YouTube clone using API integration to practice dynamic data fetching, reusable components, and frontend application architecture.",
    image: youtube,
    liveUrl: "https://zingy-brigadeiros-cf2f51.netlify.app/",
    technologies: ["React", "JavaScript", "RapidAPI"],
  },
  {
    id: 6,
    title: "Portfolio",
    category: "Frontend",
    description:
      "A personal portfolio website built to showcase my frontend development work, projects, skills, and professional journey.",
    image: portfolio,
    liveUrl: "https://comforting-concha-965fde.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const filters = [
  "All",
  "Full Stack + AI",
  "Professional Work",
  "Frontend",
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    > <DynamicTitle title="Projects" />


      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute right-[-200px] top-[45%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-600/5 blur-[140px]" />
      </div>

      <div className="layout relative z-10">
        {/* Header */}
        <motion.section
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            My Work
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Projects that show
            <span className="block text-gray-500">
              how I build.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Explore my professional frontend work, full-stack applications,
            API integrations, and AI-powered projects.
          </p>
        </motion.section>

        {/* Filters */}
        <motion.div
          className="mb-12 flex flex-wrap gap-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((item) => (
            <Button
              key={item}
              label={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition duration-300 ${filter === item
                ? "border-white bg-white text-black"
                : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
            />
          ))}
        </motion.div>

        {/* Project count */}
        <motion.div
          className="mb-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Showing{" "}
          <span className="font-semibold text-gray-300">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category */}
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-200 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-white/20 hover:text-gray-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
                    >
                      Live Project
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400">
              No projects found for this category.
            </p>
          </motion.div>
        )}
      </div>
    </motion.main>

  );
};

export default Projects;
