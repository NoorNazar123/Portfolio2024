import React from "react";
import { motion } from "framer-motion";

const CustomBounce = ({ children, delay = 0.5, y = 0 }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y,
        opacity: 1,
      }}
      transition={{
        delay,
        duration: 1,
        type: "spring",
        stiffness: 150,
      }}
    >
      {children}
    </motion.div>
  );
};

export default CustomBounce;
