import React, { Suspense, lazy } from "react";
import networkVideo from "../assets/v1.mp4";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import DynamicTitle from "../components/DynamicTitle";

// Lazy load components
const OfferSection = lazy(() => import("../components/OfferSection"));
const Freelance = lazy(() => import("../components/Freelance"));
const ProjectCards = lazy(() => import("../components/ProjectCards"));
const GoogleMap = lazy(() => import("../components/GoogleMap"));

const Home = () => {
  return (
    <>
      <DynamicTitle title="Home" />
      <div className=" home-container relative z-0">
        <video className="w-full h-[90vh] object-cover" autoPlay loop muted>
          <source src={networkVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className=" w-[full] md:w-[65%] min-h-[90vh] text-white absolute top-0 left-[3%] md:left-[15%] z-[1] text-center pt-[90px] md:pt-[200px]">
          <h1 className=" relative text-[40px] leading-[35px] font-[600] md:text-[60px] md:leading-[45px] md:font-[800] md:mt-4 mt-1">
            Showcasing
          </h1>
          <h1 className=" relative text-[40px] leading-[35px] font-[600] md:text-[70px] md:leading-[45px] md:font-[800] md:mt-4 mt-1">
            Dev Excellence
          </h1>

          <p className="text-[20px] leading-[35px] font-[300] pt-12 ">
            I am a Frontend Developer specializing in JavaScript and React.js.
            <br />
            Explore my portfolio to see my skills and projects.
          </p>
          <div className="mt-4">
            <Link to="/api/v1/noor-e-nazar/about">
              <Button
                className="bg-white text-[18px] font-[500] hover:bg-opacity-50 text-black px-6 py-3 rounded-sm mx-3 my-2 md:my-1"
                label="About Me"
              />
            </Link>
            <Link to="/api/v1/noor-e-nazar/project">
              <Button
                className="hover:bg-white bg-opacity-90 text-white hover:text-black px-4 py-3 border rounded-sm mx-3"
                label="View Projects"
              />
            </Link>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <About /> */}
        <OfferSection />
        <ProjectCards />
        <Freelance />
        {/* <Contact /> */}
        <GoogleMap />
      </Suspense>
    </>
  );
};

export default Home;
