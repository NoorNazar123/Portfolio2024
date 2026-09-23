import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/NoorNazar123",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/noor-nazar-dev/",
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/uszai_093/",
    },
    {
      label: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=61553746727080",
    },
  ];

  return (
    <motion.footer
      className="border-t border-white/10 bg-[#09090b] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="layout">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight">
                Noor e Nazar
              </h2>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                Developer · Builder
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Frontend developer building modern web experiences with React
              and Next.js, while expanding into full-stack development and
              AI-powered products.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Navigation
            </p>

            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-zinc-400 transition duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Connect
            </p>

            <a
              href="mailto:noorenazar.prog@gmail.com"
              className="text-sm text-zinc-400 transition duration-300 hover:text-white"
            >
              noorenazar.prog@gmail.com
            </a>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Noor e Nazar. All rights reserved.
          </p>

          <p>
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
