import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const ScrollIndicator = ({ showScrollIndicator }) => {
  return (
    <div
      className={`${showScrollIndicator ? "opacity-100" : "opacity-0"} fixed bottom-2 left-1/2 z-50 mx-auto max-w-screen-xl animate-bounce transition-opacity duration-300 ease-in-out max-md:hidden min-lg:-translate-x-[calc(50%-150px)]`}
    >
      <div className="bg-navy-500 rounded-full shadow-md">
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="text-5xl text-white"
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
