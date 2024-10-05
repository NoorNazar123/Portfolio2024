import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Importing icons
import Heading from "./Heading";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-[90px] border-t-2">
      <div className="layout">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <Heading className="text-[35px]" labelText="Noor e Nazar" />
          </div>

          {/* Links Section */}
          <div className="mb-4">
            <ul className="flex space-x-4 ">
              <li>
                <Link to="/api/v1/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/api/v1/project" className="hover:text-gray-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/api/v1/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61553746727080"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-400 text-[24px]"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/uszai_093/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-400 text-[24px]"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/noor-nazar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-400 text-[24px]"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center my-4 pt-4">
        <p>&copy; 2024 Noor e Nazar. All rights reserved.</p>
        <p>
          Email:
          <a
            href="mailto:noorenazar.prog@gmail.com"
            className="hover:text-gray-400"
          >
            noorenazar.prog@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
