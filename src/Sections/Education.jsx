import { useEffect, useState } from "react";
import TimelineCard from "../Components/TimelineCard";

const timelineList = [
  {
    heading: "Responsive Web Design",
    description:
      "I Mastered HTML, CSS, and modern layout techniques to build fully responsive and accessible websites.",
  },
  {
    heading: "JavaScript Algorithms and Data Structures",
    description:
      "I Developed a strong foundation in JavaScript, learning algorithms, data structures, and problem-solving techniques to write efficient code.",
  },
  {
    heading: "Front End Development Libraries",
    description:
      "I Gained hands-on experience with React, Redux, Bootstrap, and other essential libraries for building interactive and dynamic web applications.",
  },
  {
    heading: "Data Visualization",
    description:
      "I Learned how to transform raw data into meaningful visuals using D3.js and other tools to create insightful, interactive charts and graphs.",
  },
  {
    heading: "Relational Database",
    description:
      "I Acquired expertise in relational database design, SQL queries, and data management, enhancing my backend development skills.",
  },
];

const Education = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-4 flex h-full w-full flex-col gap-4">
      <h4 className="text-xl font-bold tracking-wider text-white uppercase">
        Education
      </h4>
      <div className="relative flex flex-col gap-8">
        <div
          className={`bg-navy-900 absolute ${width > 1024 ? "right-1/2 translate-x-1" : "right-0 -translate-x-[5px]"} top-0 h-full w-[4px] translate-y-2`}
        ></div>

        {timelineList.map((item, index) =>
          width > 1024 ? (
            <TimelineCard
              key={index}
              heading={item.heading}
              description={item.description}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ) : (
            <TimelineCard
              key={index}
              heading={item.heading}
              description={item.description}
              isFullWidth={true}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Education;
