import { Hero, Banner } from "../index.js";
import image from "../assets/1.jpg";

const BodyMain = () => {
  return (
    <div className="relative">
      <img
        src={image}
        alt=""
        className="absolute top-0 right-0 h-[400px] w-full"
      />

      <div className="scrollbar-hidden relative grid h-[calc(100vh-32px)] grid-rows-[300px_50px_auto_auto_60px] gap-8 overflow-y-scroll p-8 pb-0">
        <Hero />
        <Banner />

        <div className="bg-navy-500 w-full"></div>

        <div className="bg-navy-500 w-full"></div>

        <footer className="bg-navy-500 w-full"></footer>
      </div>
    </div>
  );
};

export default BodyMain;
