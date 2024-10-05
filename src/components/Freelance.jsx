import React from "react";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import RenieImg from "../assets/renies.jpg";

const Freelance = () => {
  return (
    <div className="layout ">
      <div className="pt-[50px] flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 p-6">
        <div className="w-full md:w-1/2 ">
          <a href="https://www.renie.io/" target="_blank">
            <img
              src={RenieImg}
              alt="Descriptive Alt Text"
              className="w-[450px] object-cover rounded-md"
            />
          </a>
        </div>

        <div className="w-full md:w-1/2">
          <Heading
            className="text-[45px] mb-4"
            labelText="  Freelance Work at Renie.io"
          />

          <Paragraph
            className="text-base text-[18px] text-gray-900"
            labelText="At Renie.io, I specialized in converting intricate Figma designs into
          fully functional React components. This involved meticulous attention
          to detail and a deep understanding of both design and development
          principles."
          />
          <ul className="list-disc pl-5 space-y-2 text-gray-900">
            <li>Converted Figma designs to React components</li>
            <li>Ensured pixel-perfect implementation</li>
            <li>Collaborated with designers for seamless integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
