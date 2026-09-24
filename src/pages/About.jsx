import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFastapi,
  SiSqlalchemy,
  SiCloudinary,
} from "react-icons/si";
import { motion } from "framer-motion";

import DynamicTitle from "../components/DynamicTitle";
import mypic from "../assets/mypic.jpeg";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "Python", icon: <FaPython /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
  { name: "Cloudinary", icon: <SiCloudinary /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Core Skills" },
    { id: "journey", label: "Journey" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.main
      className="min-h-screen overflow-hidden bg-[#0a0a0a] px-5 py-16 text-white sm:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DynamicTitle title="About Me" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-200px] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building with experience,
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
              growing toward full-stack AI.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm Muhammad Noor Nazar, a frontend developer with 1 year of
            professional experience at JTechsight. I build responsive,
            maintainable web applications with React and Next.js, work with
            REST APIs and real client projects, and I'm expanding into
            Python, FastAPI, databases, and AI-powered products.
          </p>
        </motion.div>

        {/* Main section */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Image */}
          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src={mypic}
                alt="Muhammad Noor Nazar"
                className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                  Frontend Developer
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Muhammad Noor Nazar
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  1 Year Professional Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 border-b border-white/10 pb-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${activeTab === tab.id
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Core Skills */}
            {activeTab === "skills" && (
              <motion.section
                className="pt-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="mb-7 text-sm leading-7 text-gray-500">
                  Technologies and tools I work with across professional
                  frontend development, full-stack applications, APIs,
                  databases, and AI-powered projects.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center text-lg text-gray-300">
                        {skill.icon}
                      </span>

                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Journey */}
            {activeTab === "journey" && (
              <motion.section
                className="pt-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold">
                  Building from frontend to full-stack AI products
                </h2>

                <div className="mt-6 space-y-6 text-gray-400">
                  {/* Professional Experience */}
                  <div className="border-l border-white/10 pl-5">
                    <p className="text-sm text-gray-500">
                      2025 – Present · JTechsight
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Frontend Developer
                    </h3>

                    <p className="mt-2 leading-7">
                      1 year of professional frontend experience building and
                      maintaining responsive React and Next.js applications,
                      translating Figma designs into production interfaces,
                      integrating REST APIs, fixing UI issues, and improving
                      frontend experiences.
                    </p>
                  </div>

                  {/* Client Work */}
                  <div className="border-l border-white/10 pl-5">
                    <p className="text-sm text-gray-500">Client Projects</p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Building real products
                    </h3>

                    <p className="mt-2 leading-7">
                      Built client-facing interfaces from scratch, including
                      the Renie project where I translated Figma designs into
                      responsive React UI and integrated REST APIs.
                    </p>
                  </div>

                  {/* Full Stack */}
                  <div className="border-l border-white/10 pl-5">
                    <p className="text-sm text-gray-500">
                      Full-Stack Development
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Expanding beyond the frontend
                    </h3>

                    <p className="mt-2 leading-7">
                      Building full-stack applications with Python, FastAPI,
                      PostgreSQL, SQLAlchemy, JWT authentication, Cloudinary,
                      database migrations, and REST APIs.
                    </p>
                  </div>

                  {/* AI */}
                  <div className="border-l border-white/10 pl-5">
                    <p className="text-sm text-gray-500">
                      AI Product Development
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Connecting web applications with AI
                    </h3>

                    <p className="mt-2 leading-7">
                      Building practical AI-powered features and exploring how
                      AI can be integrated into real web products, with a
                      focus on useful product experiences rather than AI as a
                      standalone technology.
                    </p>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <motion.section
                className="pt-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Education
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    Bachelor of Science in Computer Science
                  </h2>

                  <p className="mt-3 text-gray-400">
                    Federal Urdu University of Arts, Science & Technology
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Karachi, Pakistan
                  </p>
                </div>
              </motion.section>
            )}

            {/* Contact */}
            {activeTab === "contact" && (
              <motion.section
                className="pt-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold">
                  Let's build something useful.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-gray-400">
                  I'm open to frontend opportunities, full-stack/backend
                  opportunities, and client projects involving modern web
                  technologies and AI.
                </p>

                <div className="mt-7 space-y-4">
                  <a
                    href="mailto:noorenazar.prog@gmail.com"
                    className="flex items-center gap-4 text-gray-400 transition hover:text-white"
                  >
                    <AiOutlineMail className="text-xl" />
                    noorenazar.prog@gmail.com
                  </a>

                  <a
                    href="tel:+923178813001"
                    className="flex items-center gap-4 text-gray-400 transition hover:text-white"
                  >
                    <AiOutlinePhone className="text-xl" />
                    +92 317 8813001
                  </a>

                  <a
                    href="https://wa.me/923178813001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 transition hover:text-white"
                  >
                    <AiOutlineWhatsApp className="text-xl" />
                    WhatsApp
                  </a>
                </div>
              </motion.section>
            )}
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default About;
