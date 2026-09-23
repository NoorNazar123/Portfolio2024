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
    href: "mailto.prog@gmail.com",
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
    label: "GitHub",
    href: "https://github.com/NoorNazar123",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noor-nazar-dev/",
    icon: <FaLinkedinIn />,
  },
];

const Contact = () => {
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-24 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    > <DynamicTitle title="Contact" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="layout relative z-10">
        {/* Header */}
        <motion.section
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Get in touch
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Let&apos;s build something
            <span className="block text-gray-500">
              meaningful together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I&apos;m open to frontend development, Python/FastAPI backend
            opportunities, full-stack projects, and AI-powered product work.
            If you&apos;d like to discuss an opportunity or collaboration,
            feel free to connect with me.
          </p>
        </motion.section>

        {/* Contact Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Availability */}
          <motion.section
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <span className="text-sm font-medium text-gray-300">
                Open to opportunities
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
              Let&apos;s connect.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              Whether you&apos;re a recruiter, client, developer, or product
              team, I&apos;m always open to meaningful conversations around
              building modern web applications and AI-powered products.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
                Frontend Development
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
                Python / FastAPI
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
                Full-Stack
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
                AI Products
              </span>
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
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Contact details
            </p>

            <div className="mt-7 space-y-6">
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
                        target={item.href.startsWith("https") ? "_blank" : undefined}
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

        {/* Social Links */}
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
                Find me online
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Let&apos;s stay connected.
              </h2>
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
