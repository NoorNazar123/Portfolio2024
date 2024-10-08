import React from "react";
import { motion } from "framer-motion";

const CustimBounceX = ({ children, delay = 0.5, x = 0 }) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{
        x,
        opacity: 1,
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 150,
      }}
    >
      {children}
    </motion.div>
  );
};

export default CustimBounceX;
