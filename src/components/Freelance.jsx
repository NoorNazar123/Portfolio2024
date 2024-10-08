import React from "react";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import RenieImg from "../assets/renies.jpg";
import Button from "./Button";
import { motion } from "framer-motion";

const Freelance = () => {
  return (
    <motion.div
      className="bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="layout ">
        <div className="pt-[50px] flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 p-6">
          <motion.div
            className="w-full md:w-1/2 rounded-md overflow-hidden shadow duration-300 hover:shadow-multi-color"
            initial={{ opacity: 0, scale: 0.5, x: -60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://www.renie.io/" target="_blank">
              <img
                src={RenieImg}
                alt="Descriptive Alt Text"
                className="w-[100%] object-cover  duration-300 scale-110 hover:scale-125"
              />
            </a>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heading
              className="text-[45px] mb-4 leading-[45px]"
              labelText="  Freelance Work at Renie.io"
            />

            <Paragraph
              className="text-base text-[18px] text-gray-900 mb-4"
              labelText="At Renie.io, I specialized in converting intricate Figma designs into
          fully functional React components. This involved meticulous attention
          to detail and a deep understanding of both design and development
          principles."
            />
            <motion.ul
              className="list-disc pl-5 space-y-2 text-gray-900"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <li>Converted Figma designs to React components</li>
              <li>Ensured pixel-perfect implementation</li>
              <li>Collaborated with designers for seamless integration</li>
            </motion.ul>
            <motion.a
              href="https://github.com/NoorNazar123/collaborateProject"
              target="_blank"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Button
                className="py-2 px-4 shadow-md rounded-md mt-4 border hover:shadow-lg hover:bg-[#f0f0fw] hover:box-border hover:text-gray-700"
                label="View Code"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Freelance;
