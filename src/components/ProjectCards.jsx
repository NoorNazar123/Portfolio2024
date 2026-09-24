import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import youtube from "../assets/youtube1.jpg";
import renie from "../assets/renies.jpg";
import graphicWeb from "../assets/lobstr.png";
import NextWeb from "../assets/nextjsweb.jpg";
import portfolio from "../assets/portfolio.webp";
import teamHub from "../assets/team-hub.png";

const projects = [
  {
    id: 1,
    title: "Team Hub",
    category: "Full Stack + AI",
    featured: true,
    description:
      "A full-stack team management application with authentication, role-based access, user management, image uploads, PostgreSQL, and an AI-powered bio improvement feature.",
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
    category: "Professional Client Work",
    description:
      "A client project acquired through LinkedIn, where I built the Renie frontend from scratch from Figma designs, developed responsive React interfaces, implemented reusable UI components, and integrated REST APIs.",
    image: renie,
    liveUrl: "https://www.renie.io/",
    technologies: [
      "React",
      "Tailwind CSS",
      "Figma",
      "REST API",
      "Responsive UI",
    ],
  },

  {
    id: 3,
    title: "lobstr.io",
    category: "Professional Work · JTechsight",
    description:
      "Maintained and improved the lobstr.io website as part of my work at JTechsight, handling frontend updates, UI improvements, bug fixes, feature changes, and ongoing website maintenance.",
    image: graphicWeb,
    liveUrl: "https://www.lobstr.io/",
    technologies: [
      "Frontend Development",
      "Responsive UI",
      "Website Maintenance",
      "UI Improvements",
    ],
  },
  {
    id: 4,
    title: "Next.js Web App",
    category: "Frontend Development",
    description:
      "A modern Next.js interface experiment focused on reusable components, responsive layouts, and contemporary frontend design patterns.",
    image: NextWeb,
    liveUrl:
      "https://nextjs-with-aceternity-ui-git-main-noor-nazars-projects.vercel.app/",
    technologies: ["Next.js", "React", "Aceternity UI"],
  },
  {
    id: 5,
    title: "YouTube Clone",
    category: "Frontend Development",
    description:
      "A React application using API integration to practice dynamic data fetching, reusable components, and frontend application architecture.",
    image: youtube,
    liveUrl: "https://zingy-brigadeiros-cf2f51.netlify.app/",
    technologies: ["React", "JavaScript", "RapidAPI"],
  },
  {
    id: 6,
    title: "Portfolio",
    category: "Frontend Development",
    description:
      "A personal portfolio website designed to present frontend work, projects, technical capabilities, and professional experience.",
    image: portfolio,
    liveUrl: "https://comforting-concha-965fde.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectCards = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[-200px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="layout relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Built to solve
            <span className="block text-gray-500">
              real problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A selection of professional and personal projects showing how I
            approach frontend development, full-stack applications, API
            integration, and AI-powered product features.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.article
            className="group mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[500px]">
                <motion.img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Featured Badge */}
                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
                  Featured Project
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                  {featuredProject.category}
                </p>

                <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
                  {featuredProject.description}
                </p>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300 transition hover:border-white/20 hover:bg-white/10"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-9 flex flex-wrap gap-3">
                  {featuredProject.liveUrl && (
                    <motion.a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                    >
                      View Live Project
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                  )}

                  {featuredProject.githubUrl && (
                    <motion.a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <FaGithub />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Other Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/5" />
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-gray-400"
                  >
                    View Project
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center rounded-lg border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCards;