import { Hero, Banner, Education, Projects, GetInTouch } from "../index.js";
import image from "../assets/1.jpg";

const BodyMain = () => {
  return (
    <div className="relative w-full">
      <img
        src={image}
        alt=""
        className="absolute top-0 right-0 h-[400px] w-full object-cover object-bottom"
      />

      <div className="scrollbar-hidden relative flex h-full flex-col gap-8 overflow-y-scroll p-8 pb-0 max-lg:h-[100vh] max-lg:p-4 max-lg:pb-0">
        <Hero />
        <Banner />
        <Education />
        <Projects />
        <GetInTouch />

        <footer className="flex w-full items-center justify-center">
          <p className="font-montserrat p-4 text-center text-sm text-gray-500">
            &copy; 2025 Micheil Fourie
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BodyMain;
