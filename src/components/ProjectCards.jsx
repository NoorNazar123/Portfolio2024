import youtube from "../assets/youtube1.jpg";
import renie from "../assets/renies.jpg";
import graphicWeb from "../assets/graphicdev.jpg";
import NextWeb from "../assets/nextjsweb.jpg";
import portfolio from "../assets/portfolio.webp";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProjectCards = () => {
  return (
    <div>
      <div className="layout min-h-screen p-8">
        <section className="text-center my-16">
          <h2 className="text-[45px] font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Explore my key projects that showcase my skills in web development,
            including <br /> YouTube clone and more.
          </p>
        </section>
        {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 */}
        <div className="grid sm:grid-cols-12 gap-2">
          {/* First div takes 6 columns and 8 rows */}
          <div className=" bg-red-400 sm:col-span-6 sm:row-span-12 shadow-md hover:shadow-multi-color rounded-md overflow-hidden">
            <a
              href="https://zingy-brigadeiros-cf2f51.netlify.app/ "
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-150 duration-500 "
                src={youtube}
                alt="youtbe "
              />
            </a>
          </div>

          {/* Second div takes 3 columns and 4 rows */}
          <div className="  sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden">
            <a href="https://www.renie.io/" target="_blank">
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={renie}
                alt="renie "
              />
            </a>
          </div>

          {/* Third div takes 3 columns and 4 rows */}
          <div className=" sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden">
            <a
              href="https://symphonious-marzipan-f6b121.netlify.app/"
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={graphicWeb}
                alt="renie "
              />
            </a>
          </div>

          {/* Fourth div takes 3 columns and 4 rows */}
          <div className="  sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden">
            <a
              href="https://nextjs-with-aceternity-ui-git-main-noor-nazars-projects.vercel.app/"
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={NextWeb}
                alt="NextWeb "
              />
            </a>
          </div>

          {/* Fifth div takes 3 columns and 4 rows */}
          <div className="  sm:col-span-3 sm:row-span-6 rounded-md shadow-md hover:shadow-multi-color duration-300 overflow-hidden">
            <a
              href="https://comforting-concha-965fde.netlify.app/"
              target="_blank"
            >
              <img
                className="w-[100%] h-[100%] scale-100 hover:scale-125 duration-500 object-cover"
                src={portfolio}
                alt="portfolio"
              />
            </a>
          </div>
        </div>
        <div className="text-center my-[30px]">
          <Link to="/api/v1/noor-e-nazar/project">
            <Button
              className="px-6 py-3 shadow-md hover:shadow-lg duration-300 rounded-md "
              label="All Projects"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
