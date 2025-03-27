import { Hero, Banner, Education } from "../index.js";
import image from "../assets/1.jpg";

const BodyMain = () => {
  return (
    <div className="relative w-full">
      <img
        src={image}
        alt=""
        className="absolute top-0 right-0 h-[400px] w-full object-cover object-bottom"
      />

      <div className="scrollbar-hidden relative grid h-full grid-rows-[auto_auto_auto_1000px_60px] gap-8 overflow-y-scroll p-8 pb-0 max-lg:h-[100vh] max-lg:p-4 max-lg:pb-0">
        <Hero />
        <Banner />
        <Education />

        <div className="bg-navy-500 w-full"></div>

        <footer className="bg-navy-500 w-full"></footer>
      </div>
    </div>
  );
};

export default BodyMain;
