import { Hero, Education, Projects, GetInTouch, Services } from "../index.js";
import image from "../assets/hero.webp";
import { useRef } from "react";

const BodyMain = () => {
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute top-0 right-0 h-[400px] w-full object-cover object-bottom max-md:hidden"
      />

      <div className="scrollbar-hidden relative flex h-full flex-col gap-14 overflow-y-scroll p-8 pb-0 max-lg:p-4">
        <Hero
          handleScroll={handleScroll}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <Services handleScroll={handleScroll} contactRef={contactRef} />
        <Projects ref={projectRef} />
        <Education />
        <GetInTouch ref={contactRef} />

        <footer className="flex w-full items-center justify-center pb-6 max-lg:pb-0">
          <p className="font-montserrat text-center text-sm text-gray-500">
            &copy; 2025 Micheil Fourie
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BodyMain;
