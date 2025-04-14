import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TypewriterEffect, Banner } from "../index.js";
import heroPhoto from "../assets/hero-photo.webp";

const Hero = ({ handleScroll, projectRef, contactRef }) => {
  return (
    <header className="min-md:py-4">
      <div className="to-navy-500 from-navy-600 relative flex w-full flex-col justify-center gap-6 bg-gradient-to-tr p-8 shadow-md max-lg:mt-[60px] max-sm:p-5 min-md:from-white/5 min-md:to-[#ffffff]/10">
        <img
          src={heroPhoto}
          alt="Hero Image"
          loading="lazy"
          className="absolute right-0 -bottom-15 z-10 h-[430px] object-contain object-left max-md:hidden"
        />

        <div className="absolute top-0 left-0 h-full w-full backdrop-blur-xs"></div>

        <div className="z-10 flex w-full flex-col gap-4 max-md:w-full">
          <h1 className="z-10 text-4xl font-[800] tracking-wide text-white uppercase max-[500px]:text-[25px] md:w-[70%]">
            Explore My Digital Creative Space!
          </h1>

          <TypewriterEffect />

          <p className="z-10 text-[14px] tracking-wide text-gray-400 md:w-[60%]">
            I'm a certified Front-End developer with a decade of coding
            experience, along with several years in the graphic design industry.
          </p>

          <div className="z-10 mt-3 flex items-center">
            <button
              onClick={() => handleScroll(projectRef)}
              className="bg-accent text-navy-500 font-montserrat h-[50px] w-[170px] cursor-pointer text-[13px] font-semibold uppercase transition-all duration-300 ease-in-out hover:-translate-y-[5px]"
            >
              View Projects
            </button>

            <button
              onClick={() => handleScroll(contactRef)}
              className="group z-10 flex cursor-pointer items-center p-4 text-white"
            >
              <p className="inline-block pr-2 text-[13px] font-semibold tracking-wider uppercase">
                Hire me{" "}
              </p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>

      <Banner />
    </header>
  );
};

export default Hero;
