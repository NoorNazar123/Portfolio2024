import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GoogleMap = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const mapElement = document.getElementById("google-map");
    if (mapElement) {
      const { top } = mapElement.getBoundingClientRect();
      // Check if the map is in the viewport
      if (top < window.innerHeight && top > 0) {
        setIsVisible(true);
        // Remove the scroll event listener after the map is loaded
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        id="google-map"
        className="rounded-lg shadow-lg md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {isVisible && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7234.1065682635535!2d66.97186233904026!3d24.964301687934142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36af101e184e1%3A0xcd1339219122cbc1!2sChishti%20Nagar%20Orangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728286691938!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </motion.div>
    </motion.div>
  );
};

export default GoogleMap;
