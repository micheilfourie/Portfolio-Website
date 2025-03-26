import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/1.jpg";
import { TypewriterEffect } from "../index.js";

const Hero = () => {
  return (
    <header
      className="bg-navy-500 relative flex w-full flex-col justify-center gap-4 pl-10 shadow-md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gray-300/10 backdrop-blur-[px]"></div>

      <h1 className="z-10 w-[500px] text-4xl font-[800] tracking-wide text-white uppercase">
        Discover my Amazing Art Space!
      </h1>

      <TypewriterEffect />

      <div className="z-10 mt-4 flex items-center gap-4">
        <a href="">
          <button className="bg-accent text-navy-500 font-montserrat h-[50px] w-[170px] cursor-pointer text-[13px] font-semibold uppercase transition-all duration-300 ease-in-out hover:-translate-y-[5px]">
            View Projects
          </button>
        </a>

        <a href="" className="group z-10 flex items-center text-white">
          <p className="group inline-block pr-2 text-[13px] font-semibold tracking-wider uppercase">
            Hire me{" "}
          </p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="group text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
          />
        </a>
      </div>
    </header>
  );
};

export default Hero;
