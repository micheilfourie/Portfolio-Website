import { TimelineCard } from "../index.js";
import { timelineList } from "../data.js";

const Education = ({ handleViewerToggle }) => {
  return (
    <section className="flex w-full flex-col gap-4">
      <h4 className="text-xl font-bold tracking-wider text-white uppercase">
        Education
      </h4>
      <div className="relative flex flex-col gap-4">
        <div
          className={`bg-navy-900 absolute top-0 right-0 h-full w-[3px] -translate-x-[7px] translate-y-2 rounded-full max-md:hidden`}
        ></div>

        {timelineList.map((item, index) => (
          <TimelineCard
            key={index}
            index={index}
            heading={item.heading}
            description={item.description}
            handleViewerToggle={handleViewerToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
