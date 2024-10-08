import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants for smooth entry

  return (
    <motion.footer
      className="pt-[90px] bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="layout">
        <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <Heading className="text-[35px]" labelText="Noor e Nazar" />
            </Link>
          </motion.div>

          {/* Links Section */}
          <div className="md:mb-4">
            <ul className="flex space-x-4 my-8 md:my-0">
              <li className="nav-link">
                <Link
                  to="/api/v1/noor-e-nazar/about"
                  className="text-black hover:text-gray-700 duration-300"
                >
                  About
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/api/v1/noor-e-nazar/project"
                  className="text-black hover:text-gray-700 duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/api/v1/noor-e-nazar/contact"
                  className="text-black hover:text-gray-700 duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section with animated icons */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-10">
              <motion.li
                initial={{ opacity: 0, scale: 0, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61553746727080"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[24px]"
                >
                  <FaFacebookF className="hover:text-blue-600 duration-300" />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://www.instagram.com/uszai_093/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[24px]"
                >
                  <FaInstagram className="hover:text-pink-600 duration-300" />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://www.linkedin.com/in/noor-nazar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[24px]"
                >
                  <FaLinkedinIn className="hover:text-blue-700 duration-300" />
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <motion.div
        className="text-center my-4 pt-4"
        initial={{ opacity: 0, scale: 0.5, y: -60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>&copy; 2024 Noor e Nazar. All rights reserved.</p>
        <p>
          Email:
          <a
            href="mailto:noorenazar.prog@gmail.com"
            className="text-blue-600 px-1"
          >
            noorenazar.prog@gmail.com
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
