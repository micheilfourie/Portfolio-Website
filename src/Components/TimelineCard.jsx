import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faAward } from "@fortawesome/free-solid-svg-icons";
import starSVG from "../assets/Star_Negative.svg";

const TimelineCard = ({
  heading = "",
  description = "",
  link = "",
  direction = "left",
  isFullWidth = false,
  image = starSVG,
}) => {
  return (
    <div
      className={`flex w-full translate-y-2 gap-8 ${direction === "left" ? "justify-start" : "justify-end"} relative`}
    >
      <span className="text-navy-500 absolute top-[-9px] right-[26px] z-10 text-3xl">
        &#9700;
      </span>

      <div
        className={`to-navy-500 from-navy-600 relative bg-gradient-to-tr ${isFullWidth ? "w-full" : "w-[calc(50%-38px)]"} overflow-hidden p-6 shadow-md`}
      >
        <h5 className="mb-4 font-semibold tracking-wide text-white uppercase">
          {heading}
        </h5>
        <p className="mb-4 line-clamp-4 max-w-[600px] text-[14px] tracking-wide text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="text-accent font-montserrat group group py-4 text-sm tracking-wider"
        >
          Certificate
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
          />
        </a>
        <div className="absolute right-[-40px] -bottom-[40px] size-[150px]">
          <img src={image} alt="" className="rotate-12 opacity-1" />
        </div>
      </div>
      <div className="relative">
        <FontAwesomeIcon
          icon={faAward}
          className="text-accent -translate-y-2 rotate-[-2deg] text-[22px]"
        />
        <div className="bg-navy-500 absolute top-[-3px] left-[3px] -z-10 h-3 w-3 rounded-full"></div>
      </div>
    </div>
  );
};

export default TimelineCard;
