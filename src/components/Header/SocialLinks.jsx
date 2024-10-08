import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const socialLinksData = [
    {
      id: 1,
      href: "https://github.com/NoorNazar123",
      icon: BsGithub,
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/noor-nazar-dev/",
      icon: BsLinkedin,
    },
  ];

  return (
    <div className="flex gap-[1rem] md:gap-[2rem]">
      {socialLinksData.map((link) => (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          key={link.id}
        >
          <SocialLink key={link.id} href={link.href} icon={link.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
