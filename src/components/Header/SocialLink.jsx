import React from "react";

const SocialLink = ({ href, icon: IconComponent }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[30px] hover:scale-110 duration-500"
    >
      <IconComponent />
    </a>
  );
};

export default SocialLink;
