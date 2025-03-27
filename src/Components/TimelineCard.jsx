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
      {direction === "left" ? (
        <>
          <div
            className={`bg-navy-500 relative ${isFullWidth ? "w-full" : "w-[calc(50%-38px)]"} p-6 shadow-md`}
          >
            <span className="text-navy-500 absolute top-[-10px] right-[-15px] text-5xl">
              &#9700;
            </span>
            <h5 className="text-md mb-4 font-semibold tracking-wider text-white uppercase">
              {heading}
            </h5>
            <p className="mb-4 line-clamp-4 text-sm text-gray-400">
              {description}
            </p>
            <a
              href={link}
              className="text-accent font-montserrat group group py-4 text-[15px] tracking-wider hover:underline"
            >
              Certificate
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
              />
            </a>
          </div>
          <div className="relative">
            <div className="bg-navy-900 border-accent z-10 size-4 -translate-y-2 rounded-full border-3 shadow-md"></div>
            <div className="absolute top-0 -z-10 size-4 -translate-y-2 rounded-full bg-gray-500 group-hover:animate-ping"></div>
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <div className="bg-navy-900 border-accent z-10 size-4 -translate-y-2 rounded-full border-3 shadow-md"></div>
            <div className="absolute top-0 -z-10 size-4 -translate-y-2 rounded-full bg-gray-500 group-hover:animate-ping"></div>
          </div>

          <div className="bg-navy-500 relative w-[calc(50%-42px)] p-6 shadow-md">
            <span className="text-navy-500 absolute top-[-10px] left-[-15px] text-5xl">
              &#9701;
            </span>
            <h5 className="text-md mb-4 font-semibold tracking-wider text-white uppercase">
              {heading}
            </h5>
            <p className="mb-4 line-clamp-4 text-sm text-gray-400">
              {description}
            </p>
            <a
              href={link}
              className="text-accent font-montserrat group py-4 text-[15px] tracking-wider hover:underline"
            >
              Certificate
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineCard;
