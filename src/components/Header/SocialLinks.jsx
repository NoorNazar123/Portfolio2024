import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import SocialLink from "./SocialLink";

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
        <SocialLink key={link.id} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
};

export default SocialLinks;
