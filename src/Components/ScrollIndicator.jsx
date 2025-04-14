import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const ScrollIndicator = ({ showScrollIndicator }) => {
  return (
    <div
      className={`${showScrollIndicator ? "opacity-100" : "opacity-0"} fixed bottom-0 left-1/2 z-50 mx-auto max-w-screen-xl -translate-x-[calc(50%-150px)] animate-bounce transition-opacity duration-300 ease-in-out`}
    >
      <div className="bg-navy-500 rounded-full">
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="text-accent text-5xl"
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
