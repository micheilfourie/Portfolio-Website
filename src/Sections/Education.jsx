import { TimelineCard } from "../index.js";
import { timelineList } from "../data.js";
import { useState } from "react";

const Education = ({ handleViewerToggle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="flex w-full flex-col gap-4 px-8 max-md:px-4">
      <h4 className="text-xl font-bold tracking-wider text-white uppercase">
        Education
      </h4>
      <div className="relative flex flex-col gap-4 max-md:gap-2">
        <div
          className={`bg-navy-900 absolute top-0 right-0 h-full w-[3px] -translate-x-[0.4rem] translate-y-2 rounded-full max-md:hidden`}
        ></div>

        {timelineList.map((item, index) => (
          <TimelineCard
            key={index}
            index={index}
            heading={item.heading}
            description={item.description}
            handleViewerToggle={handleViewerToggle}
            handleCardClick={handleCardClick}
            activeIndex={activeIndex}
            certificate={item.certificate}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
