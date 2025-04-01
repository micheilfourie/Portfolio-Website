import TimelineCard from "../Components/TimelineCard";

const timelineList = [
  {
    heading: "Responsive Web Design",
    description:
      "I Mastered HTML, CSS, and modern layout techniques to build fully responsive and accessible websites.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/responsive-web-design",
  },
  {
    heading: "JavaScript Algorithms and Data Structures",
    description:
      "I Developed a strong foundation in JavaScript, learning algorithms, data structures, and problem-solving techniques to write efficient code.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/javascript-algorithms-and-data-structures-v8",
  },
  {
    heading: "Front End Development Libraries",
    description:
      "I Gained hands-on experience with React, Redux, Bootstrap, and other essential libraries for building interactive and dynamic web applications.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/front-end-development-libraries",
  },
  {
    heading: "Data Visualization",
    description:
      "I Learned how to transform raw data into meaningful visuals using D3.js and other tools to create insightful, interactive charts and graphs.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/data-visualization",
  },
  {
    heading: "Relational Database",
    description:
      "I Acquired expertise in relational database design, SQL queries, and data management, enhancing my backend development skills.",
    link: "https://www.freecodecamp.org/certification/Micheil_Fourie/relational-database-v8",
  },
];

const Education = () => {
  return (
    <section className="flex w-full flex-col gap-4">
      <h4 className="text-xl font-bold tracking-wider text-white uppercase">
        Education
      </h4>
      <div className="relative flex flex-col gap-8">
        <div
          className={`bg-navy-900 absolute top-0 right-0 h-full w-[5px] -translate-x-[7px] translate-y-2 rounded-full`}
        ></div>

        {timelineList.map((item, index) => (
          <TimelineCard
            key={index}
            heading={item.heading}
            description={item.description}
            isFullWidth={true}
            link={item.link}
          />
        ))}
      </div>
      <div className="to-navy-500 from-navy-600 mt-6 h-[200px] bg-gradient-to-tr shadow-md"></div>
    </section>
  );
};

export default Education;
