import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <div className="text-center sm:pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Experience
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid gap-8">
          <VerticalTimeline className='z-50'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#122645" }}
              contentArrowStyle={{ borderRight: "7px solid  #122645)" }}
              date="June 2022 - September 2022,"
            >
              <h3 className="vertical-timeline-element-title font-bold text-pink-600">
                Blockchain Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Snapper Future Tech
              </h4>
              <p>
                Researched on Polygon blockchain and also assited on DAO
                project.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#122645" }}
              contentArrowStyle={{ borderRight: "7px solid  #122645)" }}
              date="December 2022 - January 2023"
            >
              <h3 className="vertical-timeline-element-title font-bold text-pink-600">
                Web Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Trivia Software's
              </h4>
              <p>Worked with MERN stack for web development.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#122645" }}
              contentArrowStyle={{ borderRight: "7px solid  #122645)" }}
              date="March 2023 - June 2023"
            >
              <h3 className="vertical-timeline-element-title font-bold text-pink-600">
                Blockchain Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                WTM IT Limited 
              </h4>
              <p>Worked on crypto payments for MLM software in Tron, Ethereum and Binance Blockchain </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
