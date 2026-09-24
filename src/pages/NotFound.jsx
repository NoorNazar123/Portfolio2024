import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../components/Button";
import DynamicTitle from "../components/DynamicTitle";

const NotFound = () => {
  return (
    <motion.main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-20 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <DynamicTitle title="NotFound" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            Error 404
          </p>

          <h1 className="text-[clamp(7rem,20vw,13rem)] font-bold leading-none tracking-tighter text-white">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Page not found.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back to the portfolio.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          className="mt-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link to="/">
            <Button
              label="Back to Home"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-black transition duration-300 hover:bg-gray-200 hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* Small Code Decoration */}
        <motion.div
          className="mx-auto mt-14 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>

          <p className="mt-5 font-mono text-sm leading-7 text-gray-500">
            <span className="text-gray-300">404</span>{" "}
            <span className="text-gray-600">→</span>{" "}
            route_not_found
          </p>

          <p className="font-mono text-sm text-gray-600">
            status: page_missing
          </p>
        </motion.div>

        {/* Back Link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
          >
            <FaArrowLeft className="text-xs" />
            Return to Noor&apos;s Dev Excellence
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default NotFound;