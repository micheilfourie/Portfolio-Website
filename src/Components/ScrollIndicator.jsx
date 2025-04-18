import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ScrollIndicator = ({ showScrollIndicator, imageViewerOpen }) => {
  return (
    <div
      className={`${showScrollIndicator ? "opacity-100" : "opacity-0"} ${imageViewerOpen && "hidden"} fixed bottom-0 left-1/2 z-50 mx-auto max-w-screen-xl animate-bounce transition-opacity duration-300 ease-in-out max-md:hidden min-lg:-translate-x-[calc(50%-150px)]`}
    >
      <FontAwesomeIcon icon={faChevronDown} className="text-accent text-4xl" />
    </div>
  );
};

export default ScrollIndicator;
