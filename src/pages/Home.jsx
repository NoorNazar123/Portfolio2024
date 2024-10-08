import React, { Suspense, lazy } from "react";
import networkVideo from "../assets/v1.mp4";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import DynamicTitle from "../components/DynamicTitle";
import CustomBounce from "../components/FramerMotion.jsx/CustomBounce";
import CustomBounceX from "../components/FramerMotion.jsx/CustimBounceX";
import { motion } from "framer-motion";

// Lazy load components
const OfferSection = lazy(() => import("../components/OfferSection"));
const Freelance = lazy(() => import("../components/Freelance"));
const ProjectCards = lazy(() => import("../components/ProjectCards"));
const GoogleMap = lazy(() => import("../components/GoogleMap"));

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <DynamicTitle title="Home" />
      <div className=" home-container text-white relative z-0">
        <video className="w-full h-[90vh] object-cover" autoPlay loop muted>
          <source src={networkVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className=" md:w-[100%] absolute top-0 z-[1] text-center pt-[80px] md:pt-[160px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <CustomBounce delay="0.5">
            <h1 className=" relative text-[40px] leading-[35px] font-[700] md:text-[60px] md:leading-[45px] md:font-[800] md:mt-4 mt-1">
              Showcasing
            </h1>
            <h1 className=" relative text-[40px] leading-[35px] font-[700] md:text-[70px] md:leading-[45px] md:font-[800] md:mt-4 mt-1">
              Dev Excellence
            </h1>
          </CustomBounce>
          <CustomBounce delay="0.8">
            <p className="text-[20px] leading-[35px] font-[300] pt-8 px-3">
              I am a Frontend Developer specializing in JavaScript and React.js.
              <br />
              Explore my portfolio to see my skills and projects.
            </p>
          </CustomBounce>
          <div className="mt-10 md:flex gap-4 justify-center items-center ">
            <Link to="/api/v1/noor-e-nazar/about">
              <CustomBounceX delay="1">
                <Button
                  className="bg-white w-[15rem] md:w-[10rem] rounded-md block text-[20px] mx-auto font-[500] hover:bg-opacity-50 text-black px-6 py-4  my-3 md:my-1"
                  label="About Me"
                />
              </CustomBounceX>
            </Link>
            <Link to="/api/v1/noor-e-nazar/project">
              <CustomBounce delay="1">
                <Button
                  className="hover:bg-white w-[15rem] md:w-[10rem] rounded-md text-[18px] block mx-auto bg-opacity-90 hover:text-black px-4 py-4 my-3 border "
                  label="View Projects"
                />
              </CustomBounce>
            </Link>
          </div>
        </motion.div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <About /> */}
        <OfferSection />
        <ProjectCards />
        <Freelance />
        {/* <Contact /> */}
        <GoogleMap />
      </Suspense>
    </motion.div>
  );
};

export default Home;
