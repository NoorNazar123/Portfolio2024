import React from "react";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import RenieImg from "../assets/renies.jpg";
import Button from "./Button";

const Freelance = () => {
  return (
    <div className="bg-gray-50">
      <div className="layout ">
        <div className="pt-[50px] flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 p-6">
          <div className="w-full md:w-1/2 rounded-md overflow-hidden shadow duration-300 hover:shadow-multi-color">
            <a href="https://www.renie.io/" target="_blank">
              <img
                src={RenieImg}
                alt="Descriptive Alt Text"
                className="w-[100%] object-cover  duration-300 scale-110 hover:scale-125"
              />
            </a>
          </div>

          <div className="w-full md:w-1/2">
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
            <ul className="list-disc pl-5 space-y-2 text-gray-900">
              <li>Converted Figma designs to React components</li>
              <li>Ensured pixel-perfect implementation</li>
              <li>Collaborated with designers for seamless integration</li>
            </ul>
            <a
              href="https://github.com/NoorNazar123/collaborateProject"
              target="_blank"
            >
              <Button
                className="py-2 px-4 shadow-md rounded-md mt-4 border hover:shadow-lg hover:bg-[#f0f0fw] hover:box-border hover:text-gray-700"
                label="View Code"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
