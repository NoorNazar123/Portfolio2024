import React, { useState } from "react";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import mypic from "../assets/auth.png";
import Button from "../components/Button";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import DynamicTitle from "../components/DynamicTitle";
import { motion } from "framer-motion";

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
    <motion.div
      className="px-4 md:px-8 lg:px-16 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DynamicTitle title="About Me" />
      <div className="layout md:text-center">
        <motion.div
          className="pt-[20px] md:pt-[90px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            className="text-[45px] md:text-[45px] md:font-[900] my-6 my:4"
            labelText="About Me"
          />
          <Paragraph
            className="mx-1 md:mx-auto w-full md:w-[60%] "
            labelText="I am Muhammad Noor Nazar, a frontend developer
            specializing in React.js and also exploring MERN stack. Explore my journey and
            projects."
          />
        </motion.div>

        {/* Main Layout: Flex for larger screens and block for smaller ones */}
        <div className="flex flex-col gap-4 md:flex-row justify-between py-[40px] mt-1 md:mt-[60px]">
          {/* Left Section */}
          <div className="left w-full md:w-[60%] mx-auto mb-6 pt-[20px] text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
            <motion.div
              className="flex flex-wrap mt-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                className="my-2 md:my-4 ml-0 mr-4 bg-white py-3 px-4 rounded-md shadow-md hover:text-gray-700 hover:bg-[rgba(247,247,247,0.54)]"
                label="Skills"
                onClick={handleSkills}
              />
              <Button
                className="my-2 md:my-4 ml-0 mr-4 bg-white py-3 px-4 rounded-md shadow-md hover:text-gray-700 hover:bg-[rgba(247,247,247,0.54)]"
                label="Education"
                onClick={handleEducation}
              />
              <Button
                className="my-2 md:my-4 ml-0 mr-4 bg-white py-3 px-4 rounded-md shadow-md hover:text-gray-700 hover:bg-[rgba(247,247,247,0.54)]"
                label="Contact Me"
                onClick={handleContact}
              />
            </motion.div>

            {/* Skills, Education, Contact Section */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {skills && (
                <div className="p-4 bg-white rounded-lg shadow-md max-w-lg">
                  <h2 className="text-xl md:text-2xl font-bold  mb-4">
                    Web Development Skills
                  </h2>
                  <ul className="grid grid-cols-2 gap-4 text-gray-700 font-semibold mr-2">
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li> Git & GitHub</li>
                    <li>Tailwind CSS</li>
                    <li> API Integration</li>
                    <li> Responsive Design</li>
                    <li>Strapi</li>
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
                      <span className="text-gray-800 font-semibold mr-2">
                        University:
                      </span>
                      BSCS from Federal Urdu University, Karachi
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-800 font-semibold mr-2">
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
                      <AiOutlinePhone className=" mr-2 scale-125 duration-300 hover:scale-150" />

                      <a
                        href="tel:03178813001"
                        className=" hover:text-blue-800"
                      >
                        0317 8813001
                      </a>
                    </li>
                    <li className="flex items-center">
                      <AiOutlineWhatsApp className=" mr-2 scale-125 duration-300 hover:scale-150" />

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
                      <AiOutlineMail className=" mr-2 scale-125 duration-300 hover:scale-150" />

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
            </motion.div>
          </div>

          {/* Right Section (Image) */}
          <motion.div
            className="right w-full md:w-[40%] mx-auto mt-8 md:mt-0 overflow-hidden h-auto md:h-[600px] md:translate-y-[1rem] rounded-[20px] hover:shadow-multi-color duration-200"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="object-cover shadow-lg w-full h-full hover:scale-110 duration-500"
              src={mypic}
              alt="My Picture"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
