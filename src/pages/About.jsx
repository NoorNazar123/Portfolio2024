import React, { useState } from "react";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import mypic from "../assets/myPicture.jpg";
import Button from "../components/Button";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const About = () => {
  const [skills, setSkills] = useState(true);
  const [education, setEducation] = useState(false);
  const [contact, setContact] = useState(false);

  const handleSkills = () => {
    setSkills(true);
    setEducation(false);
    setContact(false);
  };

  const handleEducation = () => {
    setSkills(false);
    setEducation(true);
    setContact(false);
  };

  const handleContact = () => {
    setSkills(false);
    setEducation(false);
    setContact(true);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="layout text-center">
        <div className="pt-[20px] md:pt-[90px]">
          <Heading
            className="md:text-[45px] md:font-[900] my-4"
            labelText="About Me"
          />
          <Paragraph
            className="mx-auto w-full md:w-[60%] pr-2"
            labelText="I am Muhammad Noor Nazar, a frontend developer
            specializing in React.js and also exploring MERN stack. Explore my journey and
            projects."
          />
        </div>

        {/* Main Layout: Flex for larger screens and block for smaller ones */}
        <div className="flex flex-col md:flex-row justify-between py-[40px] mt-[60px]">
          {/* Left Section */}
          <div className="left w-full md:w-[60%] mx-auto mb-6 pt-[20px] text-left">
            <Heading
              className="text-[40px] md:text-[50px]"
              labelText="Noor Nazar's"
            />
            <Heading
              className="text-[40px] md:text-[50px] mt-6"
              labelText="Development Journey"
            />

            <Paragraph
              className="mt-8"
              labelText="Hi, I'm Muhammad Noor, a passionate frontend developer with
              expertise in React.js and the MERN stack. I specialize in creating
              dynamic, responsive web applications with a focus on clean design
              and seamless performance. Currently, I'm diving deeper into
              full-stack development to expand my skills in backend technologies.
              Let's connect and collaborate on something amazing!"
            />

            <div className="flex flex-wrap mt-6">
              <Button
                className="my-2 md:my-4 ml-0 mr-4 bg-white py-2 px-4 rounded-md shadow-md"
                label="Skills"
                onClick={handleSkills}
              />
              <Button
                className="my-2 md:my-4 ml-0 mr-4 bg-white py-2 px-4 rounded-md shadow-md"
                label="Education"
                onClick={handleEducation}
              />
              <Button
                className="my-2 md:my-4 ml-0 mr-4 bg-white py-2 px-4 rounded-md shadow-md"
                label="Contact Me"
                onClick={handleContact}
              />
            </div>

            {/* Skills, Education, Contact Section */}
            <div className="mt-4">
              {skills && (
                <div className="p-4 bg-white rounded-lg shadow-md max-w-lg">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    Web Development Skills
                  </h2>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        HTML & CSS
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        JavaScript
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        React.js
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        Git & GitHub
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        Tailwind CSS
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        API Integration
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        Responsive Design
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        Strapi
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {education && (
                <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    Education
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        University:
                      </span>
                      BSCS from Federal Urdu University, Karachi
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 font-semibold mr-2">
                        College:
                      </span>
                      Govt. College For Men, Nazimabad
                    </li>
                  </ul>
                </div>
              )}

              {contact && (
                <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    Get in Touch
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <AiOutlinePhone className="text-blue-500 mr-2" />

                      <a
                        href="tel:03178813001"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        0317 8813001
                      </a>
                    </li>
                    <li className="flex items-center">
                      <AiOutlineWhatsApp className="text-blue-500 mr-2" />

                      <a
                        href="https://wa.me/923178813001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        +92 317 8813001
                      </a>
                    </li>
                    <li className="flex items-center">
                      <AiOutlineMail className="text-blue-500 mr-2" />

                      <a
                        href="mailto:noorenazar.prog@gmail.com"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        noorenazar.prog@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="right w-full md:w-[40%] mx-auto mt-8 md:mt-0 overflow-hidden h-auto md:h-[600px] rounded-[20px]">
            <img
              className="object-cover shadow-lg w-full h-full"
              src={mypic}
              alt="My Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
