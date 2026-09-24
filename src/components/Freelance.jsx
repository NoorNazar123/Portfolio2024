import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import RenieImg from "../assets/renies.jpg";
import LobImg from "../assets/lobstr.png";
import Paragraph from "./Paragraph";

const Freelance = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute bottom-[10%] right-[-180px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="layout relative z-10">
        {/* Section heading */}
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Professional Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Work beyond
            <span className="block text-gray-500">
              personal projects.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Experience building client projects from scratch and contributing
            to professional websites through frontend development,
            integrations, maintenance, and product improvements.
          </p>
        </motion.div>

        {/* Professional Work */}
        <div className="space-y-8">
          {/* Renie */}
          <motion.article
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <motion.a
                href="https://www.renie.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block min-h-[320px] overflow-hidden lg:min-h-[480px]"
              >
                <motion.img
                  src={RenieImg}
                  alt="Renie website project"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
                  Client Project
                </div>
              </motion.a>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                  Professional Client Work
                </p>

                <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Renie
                </h3>

                <Paragraph
                  className="mt-6 text-base leading-8 text-gray-400"
                  labelText="Built the Renie frontend from scratch from Figma designs, developing responsive React interfaces, creating reusable UI components, and integrating REST APIs."
                />

                {/* Work highlights */}
                <motion.ul
                  className="mt-7 space-y-3 text-sm text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Built the frontend UI from scratch using Figma designs
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Developed reusable and responsive React components
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Integrated REST APIs with frontend application logic
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Focused on UI accuracy, usability, and performance
                  </li>
                </motion.ul>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Tailwind CSS",
                    "Figma",
                    "REST API",
                    "Responsive UI",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <motion.a
                    href="https://www.renie.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                  >
                    Visit Renie
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/NoorNazar123/collaborateProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Lobstr.io */}
          <motion.article
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="order-2 flex flex-col justify-center p-8 sm:p-10 lg:order-1 lg:p-14">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                  Professional Work · JTechsight
                </p>

                <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Lobstr.io
                </h3>

                <Paragraph
                  className="mt-6 text-base leading-8 text-gray-400"
                  labelText="Worked on the lobstr.io website at JTechsight, maintaining the existing website and implementing frontend updates, UI improvements, bug fixes, and feature changes."
                />

                {/* Work highlights */}
                <motion.ul
                  className="mt-7 space-y-3 text-sm text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Maintained and updated an existing production website
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Implemented frontend changes and feature improvements
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Fixed UI issues and frontend bugs
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    Improved responsiveness and user experience
                  </li>
                </motion.ul>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Frontend Development",
                    "Responsive UI",
                    "Website Maintenance",
                    "UI Improvements",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-9">
                  <motion.a
                    href="https://www.lobstr.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                  >
                    Visit Lobstr.io
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                </div>
              </div>

              {/* Image */}
              <motion.a
                href="https://www.lobstr.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative order-1 block min-h-[320px] overflow-hidden lg:order-2 lg:min-h-[480px]"
              >
                <motion.img
                  src={LobImg}
                  alt="Lobstr.io website"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
                  JTechsight
                </div>
              </motion.a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Freelance;