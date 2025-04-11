import { timelineList } from "../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageViewer = ({ handleViewerToggle, imageIndex = 0, setImageIndex }) => {
  const handlePrev = () => {
    imageIndex !== 0
      ? setImageIndex(imageIndex - 1)
      : setImageIndex(timelineList.length - 1);
  };
  const handleNext = () => {
    imageIndex !== timelineList.length - 1
      ? setImageIndex(imageIndex + 1)
      : setImageIndex(0);
  };

  return (
    <div
      className={`bg-navy-900/95 fixed top-0 left-0 z-50 flex h-[100dvh] w-[100dvw] items-center justify-center`}
    >
      <nav className="fixed top-0 left-1/2 z-50 flex h-[60px] w-full max-w-screen-xl -translate-x-1/2 items-center justify-between bg-gradient-to-tr from-[#23232D] to-[#252433] px-6 shadow-md">
        <p className="text-[15px] tracking-wide text-gray-400">
          Certificate {imageIndex + 1} of {timelineList.length}
        </p>
        <button
          onClick={() => handleViewerToggle(imageIndex)}
          className="cursor-pointer"
        >
          <div className="relative p-4">
            <div className="absolute top-1/2 right-0 h-[3px] w-7 -translate-y-1/2 rotate-45 bg-white"></div>
            <div className="absolute top-1/2 right-0 h-[3px] w-7 -translate-y-1/2 -rotate-45 bg-white"></div>
          </div>
        </button>
      </nav>

      <div className="relative mt-[60px] flex max-h-[100dvh] w-full max-w-screen-xl flex-col items-center justify-center gap-6 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${imageIndex * 100}%)` }}
        >
          {timelineList.map((item, index) => (
            <div key={index} className="flex w-full flex-shrink-0 items-end">
              <img
                src={item?.certificate || ""}
                loading="lazy"
                alt="Certificate"
                className="mx-auto max-h-[60dvh] max-w-full object-contain brightness-90"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <button onClick={handlePrev} className="cursor-pointer">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="mr-6 text-2xl text-gray-400 transition-all duration-300 ease-in-out hover:scale-120"
            />
          </button>
          {timelineList.map((item, index) => (
            <div
              onClick={() => setImageIndex(index)}
              key={index}
              className={`size-3 rounded-full hover:cursor-pointer ${imageIndex === index ? "bg-accent scale-130" : "bg-gray-500"} transitions-all duration-300 ease-in-out`}
            ></div>
          ))}
          <button
            onClick={handleNext}
            className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-120"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="ml-6 text-2xl text-gray-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
