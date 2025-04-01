import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faAward } from "@fortawesome/free-solid-svg-icons";

const TimelineCard = ({
  heading = "",
  description = "",
  link = "",
  direction = "left",
  isFullWidth = false,
}) => {
  return (
    <div
      className={`flex w-full translate-y-2 gap-8 ${direction === "left" ? "justify-start" : "justify-end"} relative`}
    >
      <span className="text-navy-500 absolute top-[-9px] right-[35px] z-10 text-3xl">
        &#9700;
      </span>

      <div
        className={`to-navy-500 from-navy-600 relative bg-gradient-to-tr ${isFullWidth ? "w-full" : "w-[calc(50%-38px)]"} overflow-hidden p-6 shadow-md`}
      >
        <h5 className="mb-4 font-semibold tracking-wider text-white">
          {heading}
        </h5>
        <p className="mb-4 line-clamp-4 text-sm tracking-wide text-gray-400 italic">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          className="text-accent font-montserrat group group py-4 text-sm tracking-wider"
        >
          Certificate
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
          />
        </a>
      </div>

      <FontAwesomeIcon
        icon={faAward}
        className="text-accent -translate-y-2 rotate-[-2deg] text-2xl"
      />
    </div>
  );
};

export default TimelineCard;
