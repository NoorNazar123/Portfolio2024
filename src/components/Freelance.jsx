import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import RenieImg from "../assets/renies.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Freelance = () => {
  return (<section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
    {/* Background glow */} <div className="pointer-events-none absolute inset-0 overflow-hidden"> <div className="absolute left-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="absolute right-[-180px] bottom-[10%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />
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
          Professional Work
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Building interfaces
          <span className="block text-gray-500">
            for real projects.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          Experience working on professional frontend projects, turning
          designs into responsive interfaces and improving existing
          applications.
        </p>
      </motion.div>

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
              alt="Renie project"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
              Professional Project
            </div>
          </motion.a>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Frontend Development
            </p>

            <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Renie
            </h3>

            <Paragraph
              className="mt-6 text-base leading-8 text-gray-400"
              labelText="Worked on the Renie frontend by translating detailed Figma designs into responsive React interfaces, focusing on visual accuracy, reusable components, and a polished user experience."
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
                Converted Figma designs into reusable React components
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                Built responsive interfaces across different screen sizes
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                Focused on UI accuracy, usability, and frontend performance
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                Worked with REST API integrations and frontend application logic
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
    </div>
  </section>
  );
};

export default Freelance;
