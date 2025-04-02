import { Hero, Education, Projects, GetInTouch } from "../index.js";
import image from "../assets/hero.webp";

const BodyMain = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute top-0 right-0 h-[400px] w-full object-cover object-bottom"
      />

      <div className="scrollbar-hidden relative flex h-full flex-col gap-14 overflow-y-scroll p-8 pb-0 max-lg:p-4">
        <Hero />
        <Education />
        <Projects />
        <GetInTouch />

        <footer className="flex w-full items-center justify-center pb-6">
          <p className="font-montserrat text-center text-sm text-gray-500">
            &copy; 2025 Micheil Fourie
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BodyMain;
