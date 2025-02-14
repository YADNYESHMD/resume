import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My Name Is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yadnyesh Mahadeshwar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Application Developer | Technical Analyst
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          With expertise in blockchain development, SAP solutions, and
          application development, I bring a unique combination of innovative
          thinking and technical skills to build scalable solutions. My journey
          has been shaped by my work in developing full-stack web applications,
          integrating blockchain technology, and optimizing business workflows
          through SAP tools. I’m passionate about solving real-world problems
          through technology and delivering impactful results.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              Explore My Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
