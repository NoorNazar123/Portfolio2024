import React from "react";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import Skill from "./Skill";
import Heading from "./Heading";

const OfferSection = () => {
  return (
    <motion.div
      className="pt-[40px] relative bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="layout text-center mb-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Paragraph
            className="text-[30px] my-4"
            labelText="Noor offers a wide range of services"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Paragraph
            className="text-[30px] mb-[50px]"
            labelText="tailored to meet your project needs."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Heading className="text-[45px] mb-[40px]" labelText="Skills" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mx-auto mb-[80px]"
        >
          <Skill />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OfferSection;
