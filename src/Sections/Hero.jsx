import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TypewriterEffect, Banner } from "../index.js";

const Hero = () => {
  return (
    <header>
      <div className="relative flex w-full flex-col justify-center gap-6 bg-gradient-to-tr from-white/5 to-[#ffffff]/10 p-10 shadow-md max-lg:mt-[60px] max-sm:p-5">
        <div className="absolute top-0 left-0 h-full w-full backdrop-blur-xs"></div>

        <h1 className="z-10 max-w-[500px] text-4xl font-[800] tracking-wide text-white uppercase max-sm:text-3xl">
          Explore My Digital Creative Space!
        </h1>

        <TypewriterEffect />

        <p className="z-10 max-w-[500px] text-sm tracking-wide text-gray-400 italic">
          I'm a certified front-end developer with a decade of coding
          experience, along with several years in the graphic design industry.
        </p>

        <div className="z-10 mt-3 flex items-center">
          <a href="#projects">
            <button className="bg-accent text-navy-500 font-montserrat h-[50px] w-[170px] cursor-pointer text-[13px] font-semibold uppercase transition-all duration-300 ease-in-out hover:-translate-y-[5px]">
              View Projects
            </button>
          </a>

          <a
            href="#contact"
            className="group z-10 flex items-center p-4 text-white"
          >
            <p className="group inline-block pr-2 text-[13px] font-semibold tracking-wider uppercase">
              Hire me{" "}
            </p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="group text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      <Banner />
    </header>
  );
};

export default Hero;
