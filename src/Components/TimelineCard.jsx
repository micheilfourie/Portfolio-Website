import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faAward,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import starSVG from "../assets/star-negative.svg";

const TimelineCard = ({
  index = index,
  heading = "",
  description = "",
  handleViewerToggle,
  handleCardClick,
  activeIndex,
  certificate,
}) => {
  return (
    <div className={`relative flex w-full translate-y-2 justify-end gap-8`}>
      <span className="text-navy-500 absolute top-[-0.57rem] right-[1.7rem] z-10 text-3xl max-md:hidden">
        &#9700;
      </span>

      <div className={`relative flex w-full flex-col overflow-hidden`}>
        <div
          onClick={() => handleCardClick(index)}
          className="to-navy-500 from-navy-600 z-10 flex items-center justify-between bg-gradient-to-tr p-6 shadow-md max-md:cursor-pointer"
        >
          <h5 className="text-sm font-semibold tracking-wide text-white uppercase">
            {heading}
          </h5>
          <div className={`min-md:hidden`}>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`text-white ${activeIndex === index ? "" : "-rotate-180"} transition-all duration-300 ease-in-out`}
            />
          </div>
        </div>

        <div
          className={`to-navy-600 from-navy-700 flex flex-col gap-2 bg-gradient-to-tr p-6 ${activeIndex !== index && "max-md:h-0 max-md:py-0 max-md:opacity-0"} transition-all duration-300 ease-out`}
        >
          <p className="line-clamp-4 max-w-[600px] text-[14px] tracking-wide text-gray-400">
            {description}
          </p>
          {certificate ? (
            <button
              onClick={() => handleViewerToggle(index)}
              className={`text-accent font-montserrat group group w-[100px] cursor-pointer py-1 text-start text-sm tracking-wider`}
            >
              Certificate
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
              />
            </button>
          ) : null}

          <div className="absolute right-[-3rem] -bottom-[3rem] size-[150px]">
            <img
              src={starSVG}
              loading="lazy"
              alt="backdrop image"
              className="rotate-12 opacity-1"
            />
          </div>
        </div>
      </div>

      <div className="relative max-md:hidden">
        <FontAwesomeIcon
          icon={faAward}
          className="text-accent -translate-y-2 text-[20px]"
        />
        <div className="bg-navy-900 absolute top-[-0.2rem] left-[0.2rem] -z-10 h-3 w-3 rounded-full"></div>
      </div>
    </div>
  );
};

export default TimelineCard;
