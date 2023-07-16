import React from "react";
import workImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import classes from "../assets/classes.png";
import project2 from "../assets/Project_2.png";
import project3 from "../assets/Project_3.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item  */}
          <div
            style={{ backgroundImage: `url(${project2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Blockchain Project
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/YADNYESHMD/NFTMarketplace"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-blod text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item  */}
          <div
            style={{ backgroundImage: `url(${classes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coaching Class Portal
              </span>
              <div className="pt-8 text-center">
                <a href="https://kamalclasses23012023.web.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-blod text-lg ">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item  */}
          <div
            style={{ backgroundImage: `url(${project3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Next JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/YADNYESHMD/yflix" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-blod text-lg ">
                    Code
                  </button>
                </a>
                <a href="https://yflix.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-blod text-lg ">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
