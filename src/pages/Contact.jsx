import React from "react";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";

import DynamicTitle from "../components/DynamicTitle";

const contactItems = [
  {
    label: "Email",
    value: "noorenazar.prog@gmail.com",
    href: "mailto:noorenazar.prog@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    label: "WhatsApp",
    value: "+92 317 8813001",
    href: "https://wa.me/923178813001",
    icon: <AiOutlineWhatsApp />,
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    icon: <AiOutlineEnvironment />,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noor-nazar-dev/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "GitHub",
    href: "https://github.com/NoorNazar123",
    icon: <FaGithub />,
  },
];

const services = [
  "Business Websites",
  "React & Next.js Development",
  "Full-Stack Web Applications",
  "REST API Integration",
  "AI-Powered Web Features",
];

const Contact = () => {
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-24 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <DynamicTitle title="Contact | Noor e Nazar" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="layout relative z-10">
        {/* Hero */}
        <motion.section
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Start a Project
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Have a project in mind?
            <span className="block text-gray-500">
              Let&apos;s build it together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I&apos;m Noor e Nazar, a frontend developer focused on building
            modern web experiences with React and Next.js, while also working
            with Python, FastAPI, APIs, databases, and AI-powered features.
          </p>

          {/* Primary CTA */}
          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href="mailto:noorenazar.prog@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              <AiOutlineMail className="text-lg" />
              Start a Conversation
            </motion.a>

            <motion.a
              href="https://wa.me/923178813001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <AiOutlineWhatsApp className="text-lg" />
              WhatsApp
            </motion.a>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* What I Can Build */}
          <motion.section
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              What I can build
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              From idea to working product.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              Whether you need a professional website, a modern frontend, a
              full-stack application, or AI functionality added to an existing
              product, I can help turn your requirements into a working web
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <span className="text-sm font-medium text-gray-300">
                Available for new opportunities
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
              Let&apos;s connect.
            </h2>

            <div className="mt-8 space-y-6">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-gray-300">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gray-600">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("https") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("https")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-1 block text-sm text-gray-300 transition hover:text-white sm:text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-gray-300 sm:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Project CTA */}
        <motion.section
          className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Have an idea?
              </p>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Tell me what you&apos;re building.
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Send me your project requirements, goals, or even a rough
                idea. We can discuss the scope and figure out the next step.
              </p>
            </div>

            <motion.a
              href="mailto:noorenazar.prog@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Email Me
              <FaArrowUpRightFromSquare className="text-xs" />
            </motion.a>
          </div>
        </motion.section>

        {/* Professional Presence */}
        <motion.section
          className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Professional Presence
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                View my work and experience.
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Connect with Noor e Nazar and explore my professional and
                technical work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {social.icon}
                  {social.label}
                  <FaArrowUpRightFromSquare className="text-xs" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Contact;