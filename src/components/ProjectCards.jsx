import React from "react";
import youtube from "../assets/youtube1.jpg";
import renie from "../assets/renies.jpg";
import graphicWeb from "../assets/graphicdev.jpg";
import NextWeb from "../assets/nextjsweb.jpg";
import portfolio from "../assets/portfolio.webp";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="layout min-h-screen p-8">
        <motion.section
          className="text-center my-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-[45px] font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Explore my key projects that showcase my skills in web development,
            including <br /> YouTube clone and more.
          </p>
        </motion.section>
        <div className="grid sm:grid-cols-12 gap-2">
          {/* First Project Card */}
          <motion.div
            className=" bg-red-400 sm:col-span-6 sm:row-span-12 shadow-md hover:shadow-multi-color rounded-md overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://zingy-brigadeiros-cf2f51.netlify.app/"
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-150 duration-500 "
                src={youtube}
                alt="youtube"
              />
            </a>
          </motion.div>

          {/* Second Project Card */}
          <motion.div
            className=" sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="https://www.renie.io/" target="_blank">
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={renie}
                alt="renie"
              />
            </a>
          </motion.div>

          {/* Third Project Card */}
          <motion.div
            className=" sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://symphonious-marzipan-f6b121.netlify.app/"
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={graphicWeb}
                alt="graphic web"
              />
            </a>
          </motion.div>

          {/* Fourth Project Card */}
          <motion.div
            className=" sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://nextjs-with-aceternity-ui-git-main-noor-nazars-projects.vercel.app/"
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={NextWeb}
                alt="NextWeb"
              />
            </a>
          </motion.div>

          {/* Fifth Project Card */}
          <motion.div
            className=" sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="https://comforting-concha-965fde.netlify.app/"
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={portfolio}
                alt="portfolio"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="text-center my-[30px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to="/api/v1/noor-e-nazar/project">
            <Button
              className="px-6 py-3 shadow-md hover:shadow-lg duration-300 rounded-md "
              label="All Projects"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;
