import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/Button";
import DynamicTitle from "../components/DynamicTitle";

// Lazy-loaded sections
const OfferSection = lazy(() => import("../components/OfferSection"));
const Freelance = lazy(() => import("../components/Freelance"));
const ProjectCards = lazy(() => import("../components/ProjectCards"));

const Home = () => {
  return (
    <motion.main
      className="bg-[#0a0a0a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DynamicTitle title="Muhammad Noor Nazar | Frontend Developer" />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-150px] top-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="absolute bottom-[5%] right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
        </div>

        {/* Grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.08]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            {/* ==================== LEFT CONTENT ==================== */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Professional role */}
              <motion.p
                className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Frontend Developer · React & Next.js
              </motion.p>

              {/* Name */}
              <motion.h1
                className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                M Noor Nazar

              </motion.h1>

              {/* Main headline */}
              <motion.h2
                className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-gray-300 sm:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I build modern websites and web applications that are made to
                work.
              </motion.h2>

              {/* Description */}
              <motion.p
                className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Frontend developer with 1 year of professional experience at
                JTechsight, specializing in React and Next.js. I build
                responsive interfaces, integrate APIs, and turn product ideas
                and designs into polished web experiences.
              </motion.p>

              {/* Secondary capability */}
              <motion.p
                className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                I also build full-stack applications with Python, FastAPI,
                PostgreSQL, and AI integrations.
              </motion.p>

              {/* Tech stack */}
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "Python",
                  "FastAPI",
                  "PostgreSQL",
                  "AI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="mt-10 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/projects">
                  <Button
                    label="View Projects"
                    className="w-full rounded-lg bg-white px-7 py-4 font-semibold text-black transition duration-300 hover:bg-gray-200 sm:w-auto"
                  />
                </Link>

                <Link to="/contact">
                  <Button
                    label="Let's Work Together"
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-white/10 sm:w-auto"
                  />
                </Link>
              </motion.div>

              {/* Professional experience */}
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <span>
                  <strong className="text-gray-300">1 year</strong>{" "}
                  professional experience
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

                <span>
                  <strong className="text-gray-300">JTechsight</strong>{" "}
                  frontend development
                </span>
              </motion.div>
            </motion.div>

            {/* ==================== RIGHT VISUAL ==================== */}
            <motion.div
              className="relative hidden min-h-[450px] items-center justify-center lg:flex"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Outer rings */}
              <div className="absolute h-[320px] w-[320px] rounded-full border border-white/10" />

              <div className="absolute h-[420px] w-[420px] rounded-full border border-white/5" />

              {/* Main card */}
              <motion.div
                className="relative flex h-[280px] w-[280px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-7xl font-bold text-white">
                    &lt;/&gt;
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.3em] text-gray-500">
                    Build · Ship · Improve
                  </p>
                </div>
              </motion.div>

              {/* React */}
              <motion.div
                className="absolute left-0 top-16 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                React
              </motion.div>

              {/* Next.js */}
              <motion.div
                className="absolute right-[-10px] top-8 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Next.js
              </motion.div>

              {/* FastAPI */}
              <motion.div
                className="absolute bottom-16 right-0 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                FastAPI
              </motion.div>

              {/* PostgreSQL */}
              <motion.div
                className="absolute bottom-8 left-[-10px] rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                PostgreSQL
              </motion.div>

              {/* JTechsight */}
              <motion.div
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                JTechsight · 1 Year
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SECTIONS ==================== */}
      <Suspense
        fallback={
          <div className="bg-[#0a0a0a] py-20 text-center text-gray-400">
            Loading...
          </div>
        }
      >
        <OfferSection />

        <ProjectCards />

        <Freelance />

      </Suspense>
    </motion.main>
  );
};

export default Home;