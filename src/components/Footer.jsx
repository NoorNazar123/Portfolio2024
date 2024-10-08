import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Importing icons
import Heading from "./Heading";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-[90px] bg-gray-50">
      <div className="layout">
        <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0 hover:scale-110 duration-300 cursor-pointer">
            <Link to="/">
              <Heading className="text-[35px]" labelText="Noor e Nazar" />
            </Link>
          </div>

          {/* Links Section */}
          <div className="md:mb-4">
            <ul className="flex space-x-4 my-8 md:my-0">
              <li className="nav-link ">
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

          {/* Social Media Section */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-10">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61553746727080"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[24px]"
                >
                  <FaFacebookF className=" scale-125 hover:scale-150 duration-300 " />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/uszai_093/"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-[24px]"
                >
                  <FaInstagram className=" scale-125 hover:scale-150 duration-300 " />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/noor-nazar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-[24px]"
                >
                  <FaLinkedinIn className=" scale-125 hover:scale-150 duration-300 " />
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
            className="text-blue-600 px-1"
          >
            noorenazar.prog@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
