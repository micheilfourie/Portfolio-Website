import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TimelineCard = ({
  heading = "",
  description = "",
  link = "",
  direction = "left",
  isFullWidth = false,
}) => {
  return (
    <div
      className={`flex w-full translate-y-2 gap-8 ${direction === "left" ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`to-navy-500 from-navy-600 relative bg-gradient-to-tr ${isFullWidth ? "w-full" : "w-[calc(50%-38px)]"} p-6 shadow-md`}
      >
        <span className="text-navy-500 absolute top-[-10px] right-[-15px] text-5xl">
          &#9700;
        </span>
        <h5 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
          {heading}
        </h5>
        <p className="mb-4 line-clamp-4 text-sm text-gray-400">{description}</p>
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

      <div className="bg-navy-900 border-accent z-10 size-4 -translate-y-2 rounded-full border-3 shadow-md"></div>
    </div>
  );
};

export default TimelineCard;
